<template>
    <div class="accounts">
      <h1>Accounts Page</h1>
      <div class="card-container">
        <div v-for="card in cards" :key="card.id" class="card">
          <h2>{{ card.name }}</h2>
          <img :src="card.image" :alt="card.name" />
          <p>{{ card.description }}</p>
          <button @click="removeCard(card)">Remove</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cards() {
        return this.$store.state.cards;
      },
    },
    methods: {
      removeCard(card) {
        this.$store.commit("removeCard", card.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .accounts {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .card {
    background-color: #f7f7f7;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    margin: 10px;
    padding: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  
  .card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .card button {
    margin-top: auto;
    align-self: flex-end;
  }
  </style>
  