<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>
        
        <v-img height="250" src="https://imageio.forbes.com/specials-images/imageserve/60e6624991d8f1ab67ca0980/Kamen-founded-FIRST-to-improve-technical-education-opportunities-for-youth-/960x0.jpg?format=jpg&width=960"></v-img>
        
        <v-card-title>RoboWars</v-card-title>
        
        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                <div class="grey--text ms-4">
                    4.5 (413)
                </div>
            </v-row>
            
            <div class="my-4 text-subtitle-1">
                Sit,Pune
            </div>

            <div>Robots built by students, divided in teams, compete to survive. The last robot standing wins the round and takes away the prize !</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        
        <v-card-title>Book Your Slot</v-card-title>

        <v-card-text>
            <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>
                
                <v-chip>8:00PM</v-chip>
                
                <v-chip>9:00PM</v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="">
                Intrested
            </v-btn>
        </v-card-actions>

        
    </v-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>