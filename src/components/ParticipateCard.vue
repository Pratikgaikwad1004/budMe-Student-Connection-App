<template>
    <v-card class="mx-auto" max-width="400" outlined>
        <v-list-item three-line>
            <v-list-item-avatar tile size="150" color="grey">
                <v-img class="white--text align-end" height="200px" :src="event.image"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <div class="text-h5 ml-3">
                    {{ event.title }}
                </div>
                <v-list-item-title class="text ml-3">
                    <b>Location</b> <br>
                    <p style="margin-top:3px ;">SIT Pune</p>

                </v-list-item-title>
                <v-list-item-title class="rmv-btn">
                    <v-btn color="#8e86d9" text @click="rmEvent()">
                        Remove
                    </v-btn>
                </v-list-item-title>

            </v-list-item-content>
        </v-list-item>

    </v-card>
</template>

<script>
export default {
    props: {
        event: Object,
        getRegistered: Function
    },
    methods: {
        rmEvent() {
            try {
                console.log("event", this.event._id);

                const user = localStorage.getItem("user");

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    "userId": user
                });
                const requestOptions = {
                    method: 'DELETE',
                    redirect: 'follow',
                    headers: myHeaders,
                    body: raw,
                };

                fetch(`http://localhost:3000/api/v1/event/removeevent/${this.event._id}`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            alert("Event removed")
                            this.getRegistered()
                        }
                    })
                    .catch(error => console.log('error', error));
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
    .v-list-item-avatar {
        height: 150px;
        width: 150px;
    }

    .text-h5 {
        font-size: 22px;
        font-weight: bold;
        margin-top: 10px;
    }

    .text {
        font-size: 16px;
        margin-top: 10px;
    }

    .rmv-btn {
        margin-top: 10px;
    }

    v-btn {
        color: white;
        background-color: #8e86d9;
    }
</style>
