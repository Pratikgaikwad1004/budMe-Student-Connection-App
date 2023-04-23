<template>
    <div>
        <div class="card mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ event.title }}</h5>
                <p class="card-text">{{ event.description.slice(0, 100) }}</p>
                <v-btn color="#8e86d9" text @click="rmEvent">
                    Remove
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        event: Object,
        getRegistered: Function
    },
    mounted() {

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

<style lang="scss" scoped></style>