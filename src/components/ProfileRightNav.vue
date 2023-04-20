<template>
  <v-navigation-drawer
    class="pa-4 mt-6"
    app
    clipped
    floating
    permanent
    right
    v-model="drawer"
  >
    <v-layout>
      <div class="hello">Your Progress
      <v-layout class="circle"> 
        <v-progress-circular
        :rotate="90"
        :size="200"
        :width="15"
        :value="value"
        color="red"
      >
        {{ value }}
      </v-progress-circular>
      </v-layout>
    </div>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-layout>
          <div class="subtitle-2">882</div>
          <div class="subtitle-2 ml-1 grey--text">Photos</div>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout>
          <div class="subtitle-2">527k</div>
          <div class="subtitle-2 ml-1 grey--text">Followers</div>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4 subtitle-2 grey--text">
      Pratik is a freelance developer!
      <br />
      <br />Moved to the US 7 years ago for college and now working as a full
      time software developer and helping people reach their goals through
      entrepreneurship!
    </v-layout>
    <v-layout class="mt-5">
      <v-flex>
        <div class="subtitle-2">Locations</div>
        <div class="subtitle-2 grey--text">Based in Cedar Rapids, IA.</div>
      </v-flex>
    </v-layout>
    <v-layout class="mt-5">
      <v-flex>
        <div class="subtitle-2">Profession</div>
        <div class="subtitle-2 grey--text">Developer</div>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style scoped>
.hello {
  text-align: center !important;
}
</style>
