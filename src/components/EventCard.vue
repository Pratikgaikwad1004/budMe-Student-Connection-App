<template>
    <v-card class="card">
      <template slot="progress">
        <!-- <v-progress-linear color="deep-purple" height="1" indeterminate></v-progress-linear> -->
      </template>
  
      <v-img height="200" src="https://imageio.forbes.com/specials-images/imageserve/60e6624991d8f1ab67ca0980/Kamen-founded-FIRST-to-improve-technical-education-opportunities-for-youth-/960x0.jpg?format=jpg&width=960"></v-img>
  
      <v-card-title class="py-0 pt-3">RoboWars</v-card-title>
  
      <v-card-text class="py-0">
        <div class="text-subtitle-1">
          Sit, Pune
        </div>
        <div class="mt-2">
          Robots built by students, divided in teams, compete to survive. The last robot standing wins the round and takes away the prize!
        </div>
      </v-card-text>
  
      <v-divider></v-divider>
  
      <v-card-title class="py-0">Book Your Slot</v-card-title>
  
      <v-card-text class="py-0">
        <v-chip-group v-model="selectedSlot" active-class="deep-purple accent-4 white--text" column>
          <v-chip v-for="(slot, index) in availableSlots" :key="index">{{ slot }}</v-chip>
        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="bookSlot()">
          Interested
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        availableSlots: ['5:30 PM', '7:30 PM', '8:00 PM', '9:00 PM'],
        selectedSlot: '',
      };
    },
    methods: {
      bookSlot() {
        if (this.selectedSlot !== '') {
          // Code to book the selected slot
          console.log('Slot booked at ' + this.selectedSlot);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @media only screen and (max-width: 1000px) {
    .card {
      width: 350px;
    }
  }
  .card {
    width: 300px;
    margin-left: 20px;
    margin-top: 50px;
  }
  </style>
  