<template>
  <v-app>
    <v-app-bar flat app clipped-right color="white" clipped>
      <div class="d-flex align-center">
        <v-card color="grey lighten-4" outlined width="300px" class="pa-2 ml-4">
          <v-layout>
            <v-flex>
              <v-icon color="grey">mdi-magnify</v-icon>
              <span class="ml-2 grey--text">Search</span>
            </v-flex>
            <v-flex class="text-right">
              <v-icon color="grey">mdi-microphone-outline</v-icon>
            </v-flex>
          </v-layout>
        </v-card>
      </div>

      <v-spacer></v-spacer>
      <v-btn dark depressed color="#E7596F" class="text-none mr-1">
        <span class="mr-2">
          <v-icon class="mr-2">mdi-plus</v-icon>Create New Post
        </span>
      </v-btn>
      <v-btn icon class="mr-2">
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
      <v-btn icon class="mr-5">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-icon>mdi-menu-down</v-icon>
    </v-app-bar>
    <main-nav />
    <profile-right-nav />

    <v-content class="pro">
      <ProfilePage />
    </v-content>
  </v-app>
</template>

<script>
import ProfilePage from "@/pages/ProfilePage";
import MainNav from "@/components/MainNav";
import ProfileRightNav from "@/components/ProfileRightNav";
// import HelloWorld from "./components/HelloWorld";

export default {

  components: {
    ProfilePage,
    MainNav,
    ProfileRightNav
  },

  data: () => ({
    drawer: true,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.v-main__wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
    left: -104px;
}
.pro{
  flex: 1 1 auto;
    max-width: 100%;
    position: relative;
    left: -135px;

}

</style>
