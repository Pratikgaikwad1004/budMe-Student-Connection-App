<template>
  <div>
    <div class="card" style="width: 80%;">
      <img class="card-img-top" :src="post.image" alt="Card image cap" height="200" width="100">
      <div class="card-body">
        <h5 class="card-title">{{ post.username }}</h5>
        <p class="card-text">{{ post.description.slice(0, 70) }}</p>
        <v-btn icon @click="onLike()">
          <v-icon>mdi-heart</v-icon><p style="margin-top: 10px;, margin-left: 10px; font-weight: bold; margin-left: 10px; margin-top: 15px;">{{ likes }}</p>
        </v-btn>
        <v-btn icon style="margin-left: 10px;">
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },
  data() {
    return {
      likes: this.post.likes
    }
  },
  methods: {
    onLike() {
      try {
        const user = localStorage.getItem("user")
        const requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };

        fetch(`http://localhost:3000/api/v1/home/addlike/${this.post._id}/${user}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.success === true) {
              this.likes += 1
            }
          })
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped></style>