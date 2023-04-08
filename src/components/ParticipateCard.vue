<template>
    <v-card class="mx-auto" max-width="400" outlined>
        <v-list-item three-line>
            <v-list-item-avatar tile size="150" color="grey">
                <v-img class="white--text align-end" height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <div class="text-h5 ml-3">
                    Event Name
                </div>
                <v-list-item-title class="text ml-3">
                    <b>Location</b> <br>
                    <p style="margin-top:3px ;">SIT Pune</p>

                </v-list-item-title>
                <v-list-item-title class="rmv-btn">
                    <v-btn color="#8e86d9" text>
                        Remove
                    </v-btn>
                </v-list-item-title>

            </v-list-item-content>
        </v-list-item>

    </v-card>
</template>

<style scoped>
.rmv-btn {
    display: flex;
    justify-content: flex-end;
}
</style>