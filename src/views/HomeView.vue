<template>
  <div>
    <AppBar />
    <div class="home-main">
      <div class="img">
        <img src="../assets/home_anime.jpg" width="270px" alt="anime">
      </div>

      <div class="feed">
        <div class="home-cards">
          <div class="home-card">
            <HomeCard />
          </div>
          <div class="home-card">
            <HomeCard />
          </div>
          <div class="home-card">
            <HomeCard />
          </div>
          <div class="home-card">
            <HomeCard />
          </div>
        </div>
      </div>

      <div class="events">
        <div class="event">
          <div class="rem-event">
            <HomeEventCard/>
          </div>
          <div class="rem-event">
            <HomeEventCard/>
          </div>
          <div class="rem-event">
            <HomeEventCard/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import HomeCard from '@/components/HomeCard.vue';
import HomeEventCard from '@/components/HomeEventCard.vue';
export default {
  components: {
    AppBar,
    HomeCard,
    HomeEventCard
  }
}
</script>

<style lang="scss" scoped>

.home-main{
  display:flex;
  justify-content: space-between;
}
.home-card {
  margin-top: 20px;
}

@media screen and (max-width: 1100px) {
  .events {
    display: none;
  }
  .home-main{
    justify-content: flex-start;
  }
  .feed{
    margin-left: 50px;

  }
}
@media screen and (max-width: 850px) {
  .img {
    display: none;
  }
    .feed {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100vh;
      overflow: auto;
    }
}
.feed {
  height: 100vh;
  overflow: auto;
}


.events{
  margin-right: 40px;
  margin-top: 20px;
}

</style>