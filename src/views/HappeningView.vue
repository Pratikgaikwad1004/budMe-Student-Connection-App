<template>
    <div>
        <AppBar/>
        <div class="main-container">
            <div class="card-container" style="">
                <div class="e-card">
                    <EventCard />
                </div>
                <div class="e-card">
                    <EventCard />
                </div>
                <div class="e-card">
                    <EventCard />
                </div>
                <div class="e-card">
                    <EventCard />
                </div>
                <div class="e-card">
                    <EventCard />
                </div>
                <div class="e-card">
                    <EventCard />
                </div>
                <div class="e-card">
                    <EventCard />
                </div>
            </div>
            <div class="h-participeted">
                <div>
                    <ParticipateCard />
                </div>
                <div>
                    <ParticipateCard />
                </div>
                <div>
                    <ParticipateCard />
                </div>
                <div>
                    <ParticipateCard />
                </div>
                <div>
                    <ParticipateCard />
                </div>
                <div>
                    <ParticipateCard />
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
    components: {
        EventCard,
        ParticipateCard,
        AppBar
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
    

    .h-participeted {
        /* display: none; */
        flex-basis: 35%;
        flex-grow: 0;
        flex-shrink: 0;
        margin-left: 20px;
        margin-top: 50px;
        margin-right: 50px;
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

</style>