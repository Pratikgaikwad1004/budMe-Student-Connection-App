<template>
    <div class="body" style="height : 100vh ; width: 100vw; border:2px solid black ">
        <div class="main">
            <div class="container">
                <h2>Add Posts</h2>

                <label for="eventImage">Image</label>
                <input type="file" class="form-control-file my-1" @change="image" id="eventImage"> <br>

                <div class="form-group my-1">
                    <label for="eventDescription">Description</label>
                    <textarea class="form-control" name="eventDescription" maxlength="70" id="eventDescription" v-model="description"
                        cols="30" rows="10"></textarea>
                </div>

                <button type="submit" class="btn" @click="onSubmit()">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
export default {
    data() {
        return {
            img: "",
            description: "",
        }
    },
    methods: {
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
        },
        onSubmit() {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "img": this.img,
                "description": this.description,
                "user": localStorage.getItem("user")
            });

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`http://localhost:3000/api/v1/home/addpost`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        alert("Post Added");
                        router.push("/")
                    }
                    if (result.error) {
                        alert("Error: " + result.error);
                    }
                })
                .catch(error => console.log('error', error));
        }
    }
}

</script>

<style lang="scss" scoped>
.btn {
    background-color: #b4aee8;
}

.body {
    height: 100vh;
    width: 100vw;
    border: 2px solid black;
    display: flex;
    ;
    justify-content: center;
    align-items: center;

}

.main {
    width: 40vw;
    height: 90vh;
    // border: 2px solid red;
    padding: 20px;
    overflow: auto;
    box-shadow: 0px 0px 7px 0px gray;
    border-radius: 10px;
}

.container h2 {
    text-align: center;
}

.eventDescription {
    height: 10vh
}

@media only screen and (max-width: 800px) {
    .container h2 {
        font-size: 25px
    }

    .main {
        width: 70vw;
    }
}
</style>