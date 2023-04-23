<template>
    <div>
        <AppBar />
        <div class="main-container">
            <div class="card-container" style="">
                <div v-for="(event, index) in events" :key="index" class="e-card">
                    <EventCard :event="event" :getRegistered="getRegistered" />
                </div>
            </div>
            <div v-if="registeredEvents.length === 0" class="h-participeted">
                <div>
                    <p>You have no registered events</p>
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
import SideBar from '@/components/SideBar.vue';
import NavBar from '@/components/NavBar.vue';
import AppBar from '@/components/AppBar.vue';
import router from '@/router';
export default {
    data() {
        return {
            events: [],
            registeredEvents: []
        }
    },
    components: {
        EventCard,
        SideBar,
        ParticipateCard,
        NavBar,
        AppBar
    },
    mounted() {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (!token || !user) {
            router.push("/login");
        }
        try {

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

<style scoped>
.main-container {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    /* flex-wrap: wrap; */
}

.h-participeted {
    flex-basis: 25%;
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: 20px;
    margin-top: 50px;
    margin-right: 50px;
    /* border: 2px solid black; */
    padding: 20px;
    margin-top: 20px;
}

.h-participeted div {
    margin-top: 30px;
}

.card-container {
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */
    flex-wrap: wrap;
    flex-basis: 65%;
    flex-grow: 0;
    flex-shrink: 0;
}

.h-sidebar {
    margin-top: 20px;
    flex-basis: 10%;
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: 40px;
    margin-top: 50px;
}

@media only screen and (max-width: 1163px) {
    .h-sidebar {
        display: none;
        /* flex-basis: 10%;
        flex-grow: 0;
        flex-shrink: 0;
        margin-left: 40px;
        margin-top: 50px; */
    }

    .h-participeted {
        display: none;
        /* flex-basis: 25%;
        flex-grow: 0;
        flex-shrink: 0;
        margin-left: 20px;
        margin-top: 50px;
        margin-right: 50px;
        border: 2px solid black;
        padding: 20px; */

    }

    .e-card {
        margin-top: 50px;
    }

    .main-container {
        display: inline;
    }
}

@media only screen and (max-width: 1461px) {
    .h-sidebar {
        /* display: none; */
        flex-basis: 10%;
        flex-grow: 0;
        flex-shrink: 0;
        margin-left: 40px;
        margin-top: 50px;
    }

    .h-participeted {
        /* display: none; */
        flex-basis: 35%;
        flex-grow: 0;
        flex-shrink: 0;
        margin-left: 20px;
        margin-top: 50px;
        margin-right: 50px;
        border: 2px solid black;
        padding: 20px;

    }

    .e-card {
        margin-top: 50px;
    }

    .card-container {
        display: flex;
        justify-content: center;
        /* border: 1px solid red; */
        flex-wrap: wrap;
        flex-basis: 55%;
        flex-grow: 0;
        flex-shrink: 0;
    }
}

@media screen and (max-width: 1465px) and (min-width: 1200px) {
    .sidebar {
        margin-left: 50px;
        /* border: 1px solid black; */
    }
}
</style>