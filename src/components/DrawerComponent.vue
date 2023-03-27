<template>
    <v-navigation-drawer absolute expand-on-hover permanent>
        <v-list class="sidebar-header">
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                </v-list-item-avatar>
            </v-list-item>



            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Sandra Adams
                    </v-list-item-title>
                    <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-account-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-exit-to-app</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Exit</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-download</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Saved</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-projector-screen-variant-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>My Projects</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.sidebar-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>