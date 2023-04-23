<template>
  <div>
    <AppBar />
    <div class="home-main">
      <div class="img">
        <img src="../assets/home_anime.jpg" width="270px" alt="anime">
      </div>

      <div class="feed">
        <div class="home-cards">
          <div v-for="(post, index) in posts" :key="index" class="home-card">
            <HomeCard :post="post" />
          </div>
        </div>
      </div>

      <div class="events">
        <div v-if="events.length === 0" class="event">
          <div class="rem-event">
            <p>You don't have any registered event</p>
          </div>
        </div>

        <div v-else class="event">
          <div v-for="(event, index) in events" :key="index" class="rem-event">
            <HomeEventCard :event="event" :getRegistered="getRegistered" />
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
  methods: {
    getRegistered() {
      try {
        const user = localStorage.getItem("user");

        const requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };

        fetch(`http://localhost:3000/api/v1/event/getregisteredevents/${user}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.events = result.events;
          })
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log(error);
      }
    }
  },
  data() {
    return {
      posts: [],
      events: []
    }
  },
  components: {
    AppBar,
    HomeCard,
    HomeEventCard
  },
  mounted() {
    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/api/v1/home/getallposts", requestOptions)
        .then(response => response.json())
        .then(result => this.posts = result.posts)
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
    this.getRegistered()
  }
}
</script>

<style lang="scss" scoped>
.home-main {
  display: flex;
  justify-content: space-between;
}

.home-card {
  margin-top: 20px;
}

@media screen and (max-width: 1100px) {
  .events {
    display: none;
  }

  .home-main {
    justify-content: flex-start;
  }

  .feed {
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


.events {
  margin-right: 40px;
  margin-top: 20px;
}
</style>