<template>
    <div>
        <div class="chat-container">
            <div class="chat-sidebar">
                <ChatSidebar />
            </div>
            <div class="chat-dashboard">
                <ChatDashboard :onChangeMessage="onChangeMessage" :onSend="onSend" :messages="messages" />
            </div>
        </div>
    </div>
</template>

<script>
import ChatSidebar from '@/components/ChatSidebar.vue'
import ChatDashboard from '@/components/ChatDashboard.vue'
import router from '@/router'
const { io } = require("socket.io-client");
export default {
    data() {
        return {
            sendTo: router.history.current.params.userid,
            socket: io("http://localhost:3000"),
            messages: [],
            message: "",
            receviedMsg: ""
        }
    },
    mounted() {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        console.log(user);

        if (!token) {
            alert("Please login first");
            return router.push("/login");
        }
        this.socket.emit("login", user);
        this.socket.emit("join", this.sendTo);
        this.socket.on('receive', (data) => {
                console.log("mess", data);
                // this.receviedMsg = data.message;
                this.messages.push({type: "incomming", msg: data.message});
            })
        // console.log(this.sendTo);
        // console.log(this.messages);
    },
    components: { ChatSidebar, ChatDashboard },
    methods: {
        onReceiveMsg() {
            // console.log("rinning");
            
        },
        onChangeMessage(e) {
            this.message = e.target.value;
            // console.log(this.message);
        },
        onSend(e) {
            const user = localStorage.getItem("user")
            // console.log("aaa");
            this.socket.emit("send", user, this.sendTo, this.message)
            this.messages.push({type: "outgoing", msg: this.message, from: user, to: this.sendTo})
            // this.onReceiveMsg();
            this.message = "";
            e.target.value = "";
        },
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
}</style>