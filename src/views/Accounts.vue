<template>
    <div>
        <AppBar />
        <div class="main-container">
            <div v-if="registeredEvents.length === 0" class="h-participeted">
                <div>
                    <p>Empty</p>
                </div>
            </div>
            <div v-else class="h-participeted">
                <div v-for="(event, index) in registeredEvents" :key="index">
                    <ParticipateCard :event="event" :getRegistered="getRegistered" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import ParticipateCard from '@/components/ParticipateCard.vue';
import AppBar from '@/components/AppBar.vue';
export default {
    data() {
        return {
            events: [],
            registeredEvents: []
        }
    },
    components: {
        ParticipateCard,
        AppBar
    },
    mounted() {
        try {
            const user = localStorage.getItem("user");

            const requestOptions = {
                method: 'POST',
                redirect: 'follow'
            };

            fetch("http://localhost:3000/api/v1/event/getallevents", requestOptions)
                .then(response => response.json())
                .then(result => {
                    this.events = result.events;
                    console.log(this.events);
                })
                .catch(error => console.log('error', error));

            fetch(`http://localhost:3000/api/v1/event/getregisteredevents/${user}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    this.registeredEvents = result.events;
                })
                .catch(error => console.log('error', error));

            this.getRegistered()
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        getRegistered() {
            try {
                const user = localStorage.getItem("user");

                const requestOptions = {
                    method: 'POST',
                    redirect: 'follow'
                };

                fetch(`http://localhost:3000/api/v1/event/getregisteredevents/${user}`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        this.registeredEvents = result.events;
                    })
                    .catch(error => console.log('error', error));
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
