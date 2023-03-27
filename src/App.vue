<template>
  <v-app>
    <!-- <NavBar/> -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
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
