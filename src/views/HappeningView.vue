<template>
    <div>
        <div class="main-container">
            <div class="h-sidebar">
                <div class="sidebar" style="margin-left: 40px;">
                    <SideBar />
                </div>
            </div>
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
import SideBar from '@/components/SideBar.vue';
export default {
    components: {
        EventCard,
        SideBar,
        ParticipateCard
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
}</style>