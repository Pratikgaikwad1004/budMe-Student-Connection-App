<template>
  <v-app>
    <!-- <NavBar/> -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
import "@/assets/css/bootstrap/bootstrap.min.css"
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavBar,
  },
};
</script>
