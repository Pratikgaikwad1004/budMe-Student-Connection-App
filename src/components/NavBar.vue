<template>
    <v-app-bar app color="white" light>
        <div class="d-flex align-center">
            <v-icon size="40" color="black" class="appbar-cursor">mdi-menu</v-icon>
        </div>

        <v-spacer></v-spacer>
        <div class="d-flex align-center">
            <h2>ConnectME</h2>
        </div>
        <v-spacer></v-spacer>
        <v-icon size="40" color="black" class="appbar-cursor">mdi-chat-processing-outline</v-icon>
    </v-app-bar>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
.appbar-cursor {
    cursor: pointer;
}
</style>