<template>
    <div>
        <h1 style="text-align: center;">Happening</h1>
        <v-row style="margin-top: 20px;">
            <v-cols cols="2" style="margin-left: 20px;">
                <SideBar />
            </v-cols>
            <v-col cols="8" style="padding-left: 30px;">
                <v-row st>
                    <v-col cols="4">
                        <EventCard />
                    </v-col>
                    <v-col cols="4">
                        <EventCard />
                    </v-col>
                    <v-col cols="4">
                        <EventCard />
                    </v-col>
                    <v-col cols="4">
                        <EventCard />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
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
.container-right {
    border: 1px solid red;
    display: flex;
    justify-content: flex-end;
}
</style>