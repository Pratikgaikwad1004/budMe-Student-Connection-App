<template>
    <div class="main-container">
        <div class="project-details">
            <h1>{{ project.title }}</h1>
            <h5>Description</h5>
            <p>{{ project.description.slice(0, 80) }}...</p>
            <div class="buttons">
                <ProjectModal :project="project" :updateModal="updateModal" :setCount="setCount" />
                <!-- <button class="show-btn"><ProjectModal/></button> -->
                <button class="join-btn" @click="onRequest()">Request to join</button>
            </div>
        </div>
        <div class="project-image">
            <div class="project-img">
                <img :src="project.image" height="200" width="300" style="border-radius: 8px 8px 0px 0px;" />
            </div>
        </div>
    </div>
</template>

<script>
import ProjectModal from './ProjectModal.vue';
export default {
    components: { ProjectModal },
    props: {
        project: Object,
        onJoined: Function,
        updateModal: Number,
        setCount: Function
    },
    data() {
        return {
            sendTo: router.history.current.params.userid,
            socket: io("http://localhost:3000"),
            message: "I want to join your group",
        }
    },
    methods: {
        onRequest() {
            try {
                const user = localStorage.getItem("user")
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const raw = JSON.stringify({
                    "userID": localStorage.getItem("user")
                });

                const requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch(`http://localhost:3000/api/v1/project/addinproject/${this.project._id}`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            this.socket.emit("send", user, this.sendTo, this.message);
                            alert("Requested");
                            this.onJoined()
                        }
                        if (result.error) {
                            alert(result.error);
                        }
                    })
                    .catch(error => console.log('error', error));
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style scoped>
@media only screen and (max-width: 1300px) {
    .main-container {
        min-width: 300px;
        border: 1px;
        flex-direction: column;
    }
}

@media only screen and (max-width: 1000px) {
    .main-container {
        min-width: 300px;
        border: 1px;
        flex-direction: column;
    }
}

@media only screen and (max-width: 550px) {
    .main-container {
        flex-wrap: wrap;
        flex-direction: column-reverse;
        min-width: 230px;
        border: 1px solid black;
        justify-content: center;
    }

    .project-img img {
        width: 100%;
    }
}

.main-container {
    display: flex;
    width: 300px;
    background-color: #cdc8d8;
    justify-content: space-between;
    border-radius: 10px;
    flex-direction: column-reverse;
}



.project-details {
    padding: 0px 10px;
    margin-top: 5px;
}


.join-btn {
    background-color: white;
    color: black;
    font-weight: 500;
    border-radius: 5px;
    padding: 5px;
    margin: 10px 10px;
}

.show-btn {
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 5px;
    margin: 10px 10px;
}

.project-img {
    /* display: flex;
    justify-content: flex-end;
    align-items: flex-end; */
}
</style>