<template>
    <div class="body" style="height : 100vh ; width: 100vw; border:2px solid black ">
        <div class="main">
            <div class="container">
                <h2>Event Registration Form</h2>
                <div class="form-group">
                    <label for="eventTitle">Title</label>
                    <input type="text" class="form-control" id="eventTitle" v-model="title" placeholder="Event Title">
                </div>
                <div class="form-group">
                    <label for="institute">Institute</label>
                    <input type="text" class="form-control" id="institute" v-model="institute"
                        placeholder="Enter Institue Name">
                </div>
                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="email" class="form-control" id="location" v-model="Location"
                        placeholder="ex. Pune , Mumbai">
                </div>
                <div class="form-group">
                    <label for="time">Date & Time</label>
                    <input type="datetime-local" class="form-control" id="time" v-model="time"
                        placeholder="enter time seperated with comma and space">
                </div>

                <label for="eventImage">Event Image</label>
                <input type="file" class="form-control-file" @change="image" id="eventImage"> <br>

                <div class="form-group">
                    <label for="eventDescription">Event Description</label>
                    <textarea class="form-control" name="eventDescription" id="eventDescription" v-model="description" cols="30" rows="10"></textarea>
                </div>

                <button type="submit" class="btn" @click="onSubmit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            img: "",
            title: "",
            Location: "",
            description: "",
            institute: "",
            time: ""
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
                    "institute": this.institute,
                    "time": this.time,
                    "location": this.Location
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:3000/api/v1/event/addevent", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if(result.success){
                            this.img = "";
                            this.title = "";
                            this.description ="";
                            this.institute="";
                            this.time=""; 
                            this.Location="";
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
        image(event) {
            this.img = event.target.files[0];
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

                fetch("http://localhost:3000/api/v1/event/addimage", requestOptions)
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