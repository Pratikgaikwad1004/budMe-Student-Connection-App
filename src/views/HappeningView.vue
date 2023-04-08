<template>
    <div>
        <div class="main-container">
            <div style="flex-basis: 10%; flex-grow: 0; flex-shrink: 0; margin-left: 40px; margin-top: 50px;" class="h-sidebar"><div class="sidebar"><SideBar /></div></div>
            <div class="card-container" style="flex-basis: 65%; flex-grow: 0; flex-shrink: 0;">
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
            <div style="flex-basis: 25%; flex-grow: 0; flex-shrink: 0; margin-left: 20px; margin-top: 50px;" class="h-participeted"><h1>Event card</h1></div>
        </div>
    </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import SideBar from '@/components/SideBar.vue';
export default {
    components: {
        EventCard,
        SideBar
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
.card-container {
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */
    flex-wrap: wrap;
}
@media only screen and (max-width: 1000px) {
  .h-sidebar {
    display: none;
  }
  .h-participeted {
    display: none;
  }
  .e-card {
    margin-top: 50px;
  }
  .card-container {
    justify-content: center;
  }
}
@media screen and (max-width: 1465px) and (min-width: 1200px) {
  .sidebar {
    margin-left: 50px;
    /* border: 1px solid black; */
  }
}
</style>