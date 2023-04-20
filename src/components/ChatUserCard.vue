<template>
    <div>
        <div class="chat-user-card-main" @click="$router.push(`/chat/${user._id}`)">
            <div class="avatar">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            </div>
            <div class="user-details">
                <h4>{{ user.name }}</h4>
                <p style="font-size: 15px; color: gray;">okay 👍</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: Object,
    },
    mounted() {
        // console.log(this.user)
    },
    methods: {
    }
}
</script>

<style scoped>
.avatar {
    padding: 20px;
}

.chat-user-card-main {
    display: flex;
    align-items: center;
    border-radius: 100%;
}

.user-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.avatar img {
    height: 40px;
    padding-bottom: 0;
    border-radius: 50px;
}</style>