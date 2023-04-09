<template>
    <div class="container">
        <div class="form-group">
            <label for="eventTitle">Title</label>
            <input type="text" class="form-control" id="eventTitle" v-model="title" placeholder="Event Title">
        </div>
        <div class="form-group">
            <label for="institute">Institute</label>
            <input type="text" class="form-control" id="institute" v-model="institute" placeholder="Enter Institue Name">
        </div>
        <div class="form-group">
            <label for="location">Location</label>
            <input type="email" class="form-control" id="location" v-model="Location" placeholder="ex. Pune , Mumbai">
        </div>
        <div class="form-group">
            <label for="time">Date & Time</label>
            <input type="datetime-local" class="form-control" id="time" v-model="time" placeholder="enter time seperated with comma and space">
        </div>

        <label for="eventImage">Event Image</label>
        <input type="file" class="form-control-file" @change="image" id="eventImage"> <br>

        <div class="form-group">
            <label for="eventDescription">Event Description</label>
            <input class="form-control" id="eventDescription" v-model="description" placeholder="Enter Event Details">
        </div>

        <button type="submit" class="btn" @click="onSubmit">Submit</button>
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
                    .then(result => console.log(result))
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

                // var raw = JSON.stringify({
                //     "img": "https://unsplash.com/photos/YvpLGlwNISY",
                //     "title": "Nature",
                //     "description": "aaaaaaaaaaaaaaaaaaaaaaa",
                //     "institute": "SIT",
                //     "time": [
                //         "10:00am",
                //         "11:00pm"
                //     ]
                // });

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
            // console.log(this.img)
        }
    },
}
</script>

<style lang="scss" scoped>
.btn {
    background-color: #b4aee8;
}
</style>