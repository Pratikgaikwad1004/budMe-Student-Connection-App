<template>
  <v-navigation-drawer color="grey lighten-5" floating class="pa-4" app permanent v-model="drawer" width="320">
    <v-layout class="pa-1">
      <div>
        <v-img
          width="180px"
          lazy-src="../assets/instagram_logo.png"
          src="../assets/instagram_logo.png"
        ></v-img>
      </div>
    </v-layout>
    <v-layout class="mt-10">
      <v-flex>
        <v-layout>
          <v-flex text-center>
            <!-- <v-card class="text-center" width="70" style="border-radius: 50%" outlined> -->
            <v-avatar class="outlined" size="80">
              <v-avatar size="70">
                <v-img
                  lazy-src="../assets/72412584.png"
                  src="../assets/72412584.png"
                />
              </v-avatar>
            </v-avatar>
            <!-- </v-card> -->

            <div class="mt-4 title">Kaustubh Mani Tripathi</div>
            <div class="mt-1 subtitle-2 grey--text">Symbiosis Institute of Technology, Pune</div>
            <div class="mt-5">
              <v-layout style="overflow-y: auto;">
                <v-flex>
                  <div class="subtitle-2">Contributions </div>
                  <div class="subtitle-2 grey--text">116</div>
                </v-flex>
                <v-flex>
                  <div class="subtitle-2">Following</div>
                  <div class="subtitle-2 grey--text">48m</div>
                </v-flex>
                <v-flex>
                  <div class="subtitle-2">Followers</div>
                  <div class="subtitle-2 grey--text">48m</div>
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-list nav dense class="mt-10">
      <v-list-item-group v-model="group" active-class="#E7596F--text">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Feed</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-calendar-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Happening</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-folder-lock-open</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Resources</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-human-greeting</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Collab</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bell-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Notification</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Direct</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-chart-pie</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Status</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style>
.v-avatar.outlined {
  border: 2px solid #e7596f;
  background-color: transparent;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
.v-application .subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    letter-spacing: 0.0071428571em !important;
    line-height: 1.375rem;
    font-family: "Roboto", sans-serif !important;
    margin-right: 10px;
}
</style>