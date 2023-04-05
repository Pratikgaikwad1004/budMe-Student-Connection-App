<template>
    <div>
        <v-app-bar app color="white" light>
            <div class="d-flex align-center">
            <v-img class="shrink mr-2" width="150" contain src="@/assets/logo.png" transition="scale-transition">
            </v-img>
            </div>
            <v-spacer></v-spacer>
            <v-icon size="40" color="black" class="appbar-cursor">mdi-message-outline</v-icon>
        </v-app-bar>
        <DrawerComponent />
    </div>
</template>

<script>
import DrawerComponent from './DrawerComponent.vue';
export default {
    name: "NavBar",
    components: { DrawerComponent },
    data() {
        return {
            isDrawerOpen: false
        }
    }
}
</script>

<style scoped>
.appbar-cursor {
    cursor: pointer;
}
</style>