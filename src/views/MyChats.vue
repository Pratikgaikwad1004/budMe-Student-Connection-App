<template>
    <div>
        <div class="chat-container">
            <div class="chat-sidebar">
                <ChatSidebar />
            </div>
            <div class="chat-dashboard">
                <ChatDashboard />
            </div>
        </div>
    </div>
</template>

<script>
import ChatSidebar from '@/components/ChatSidebar.vue'
import ChatDashboard from '@/components/ChatDashboard.vue'
export default {
    components: { ChatSidebar, ChatDashboard },

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
    .chat-sidebar {
        display: none;
    }
    .chat-dashboard {
        flex-basis: 100%;
    }
}
</style>