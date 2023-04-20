<template>
    <div>
        <div class="chat-container">
            <div class="chat-sidebar">
                <ChatSidebar />
            </div>
            <div class="chat-dashboard">
                <div class="sc"><h3>Please select chat</h3></div>
            </div>
        </div>
    </div>
</template>

<script>
import ChatSidebar from '@/components/ChatSidebar.vue'
import ChatDashboard from '@/components/ChatDashboard.vue'
import router from '@/router';
const { io } = require("socket.io-client");
export default {
    data() {
        return {
            // socket: io("http://localhost:3000"),
            // message: "",
        }
    },
    components: { ChatSidebar, ChatDashboard },
    mounted() {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        console.log(user);

        if (!token) {
            alert("Please login first");
            return router.push("/login");
        }
    },
    methods: {
        
    },

}
</script>

<style scoped>
.chat-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
}

.sc {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
}

.chat-sidebar {
    background-color: #f5f7fb;
    flex-basis: 25%;
    width: 100%;
    height: 100vh;
}

.chat-dashboard {
    background-color: white;
    width: 100%;
    height: 100vh;
    flex-basis: 75%;
    box-shadow: 15px 0px 24px gray;
}

@media (max-width: 700px) {
    .chat-dashboard {
        display: none;
    }

    .chat-sidebar {
        flex-basis: 100%;
    }
}
</style>