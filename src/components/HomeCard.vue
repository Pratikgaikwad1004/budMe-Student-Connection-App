<template>
    <div>
        <div class="card" style="width: 80%;" >
            <img class="card-img-top" :src="post.image" alt="Card image cap" height="200" width="100">
            <div class="card-body">
                <h5 class="card-title">{{ post.username }}</h5>
                <p class="card-text">{{ post.description.slice(0, 70) }}</p>
                    <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
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
  }
}
</script>

<style scoped>
</style>