<template>
    <div class="body" style="height : 100vh ; width: 100vw; border:2px solid black ">
        <div class="main">
            <div class="container">
                <h2>Project Registration Form</h2>

                <div class="form-group my-3">
                    <label for="eventTitle">Title</label>
                    <input type="text" class="form-control" id="eventTitle" v-model="title" placeholder="Event Title">
                </div>

                <div class="form-group my-3">
                    <label for="domain">Domain</label>
                    <input type="text" class="form-control" id="domain" v-model="domain"
                        placeholder="Domain of Project">
                </div>
                <!-- <div class="form-group my-1">
                    <label for="location">Location</label>
                    <input type="email" class="form-control" id="location" v-model="Location"
                        placeholder="ex. Pune , Mumbai">
                </div> -->
                <!-- <div class="form-group my-1">
                    <label for="time">Date & Time</label>
                    <input type="datetime-local" class="form-control" id="time" v-model="time"
                        placeholder="enter time seperated with comma and space">
                </div> -->

                <label for="eventImage">Event Image</label> <br>
                <input type="file" class="form-control-file my-3" @change="image" id="eventImage"> <br>

                <div class="form-group my-3">
                    <label for="eventDescription">Project Description</label>
                    <textarea class="form-control" name="eventDescription" id="eventDescription" v-model="description" cols="30" rows="10"></textarea>
                </div>

                <button type="submit" class="btn" @click="onSubmit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router/index';
export default {
    data() {
        return {
            img: "",
            title: "",
            description: "",
            domain: "",
        }
    },
    methods: {
        onSubmit() {
            try {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var raw = JSON.stringify({
                    "img": this.img,
                    "title": this.title,
                    "description": this.description,
                    "domain": this.domain,
                    "author": localStorage.getItem("user")
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:3000/api/v1/project/addproject", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        console.log(result);
                        if(result.success){
                            this.img = null;
                            this.title = "";
                            this.description ="";
                            this.domain="";
                            router.push('/collab');
                        }
                        else{
                            alert(result.error);
                        }
                    })
                    .catch(error => console.log('error', error));            
            } catch (error) {
                console.log(error);
            }
        },
        image(project) {
            this.img = project.target.files[0];
            const formData = new FormData();
            formData.append("img", this.img);
            try {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "multipart/form-data");

                var requestOptions = {
                    method: 'POST',
                    body: formData,
                    redirect: 'follow'
                };

                fetch("http://localhost:3000/api/v1/project/addiproject", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        this.img = result.filepath;
                    })
                    .catch(error => console.log('error', error));

            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.btn {
    background-color: #b4aee8;
}

.body{
    height : 100vh ; 
    width: 100vw;
     border:2px solid black;
     display: flex;;
     justify-content: center;
     align-items: center;
     
}
.main{
    width: 40vw;
    height: 90vh;
    // border: 2px solid red;
    padding: 20px;
    overflow: auto;
    box-shadow: 0px 0px 7px 0px gray;
    border-radius: 10px;
}

.container h2{
    text-align: center;
}

.eventDescription{
    height:10vh
}

@media only screen and (max-width: 800px) {
    .container h2{
        font-size: 25px
    }
    
    .main{
        width: 70vw;
    }
}
</style>