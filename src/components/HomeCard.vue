<template>
  <div>
    <div class="card" style="width: 80%;">
      <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ cardData.title }}</h5>
        <p class="card-text">{{ cardData.text }}</p>
        <v-btn icon @click="handleLike">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon @click="handleShare">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
        <v-btn icon @click="handleSave">
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cardData: {},
    };
  },
  created() {
    axios.get('/api/card').then((response) => {
      this.cardData = response.data;
    });
  },
  methods: {
    handleLike() {
      axios.post('/api/card/like', { id: this.cardData.id }).then((response) => {
        console.log(response.data);
      });
    },
    handleShare() {
      axios.post('/api/card/share', { id: this.cardData.id }).then((response) => {
        console.log(response.data);
      });
    },
    handleSave() {
      axios.post('/api/card/save', { id: this.cardData.id }).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<style scoped>
</style>
