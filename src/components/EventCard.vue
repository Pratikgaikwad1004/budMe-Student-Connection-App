<template>
    <v-card class="card">
        <template slot="progress">
            <!-- <v-progress-linear color="deep-purple" height="1" indeterminate></v-progress-linear> -->
        </template>

        <v-img height="200" :src="event.image"></v-img>

        <v-card-title class="py-0 pt-3">{{ event.title }}</v-card-title>

        <v-card-text class="py-0">

            <div class="text-subtitle-1">
                {{ event.institute }}, {{ event.location }}
            </div>

            <div class="mt-2">{{ event.description.slice(0, 100) }}...</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-title class="py-0">Book Your Slot</v-card-title>

        <v-card-text class="py-0">
            <v-chip-group active-class="deep-purple accent-4 white--text" column>
                <v-chip>{{ time }}</v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="onSubmit()">
                Intrested
            </v-btn>
        </v-card-actions>


    </v-card>
</template>

<script>
export default {
    data() {
        return {
            time: ""
        }
    },
    props: {
        event: Object,
        getRegistered: Function
    },
    methods: {
        onSubmit() {
            try {
                const userId = localStorage.getItem("user");
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const raw = JSON.stringify({
                    "eventId": this.event._id,
                    "userId": userId
                });

                const requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:3000/api/v1/event/getinevent", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            alert("You are registered for the event", this.event.title);
                            this.getRegistered()
                        }
                        if (result.error) {
                            alert(result.error)
                        }
                    })
                    .catch(error => console.log('error', error));
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        console.log(this.event);
        const time = new Date(this.event.time)
        this.time = time.toLocaleTimeString('en-US');
    }
}
</script>

<style scoped>
@media only screen and (max-width: 1000px) {
    .card {
        width: 350px;
    }
}

.card {
    width: 300px;
    margin-left: 20px;
    margin-top: 50px;
}
</style>