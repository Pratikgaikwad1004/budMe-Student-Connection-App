<template>
    <div>
        <div class="container">
            <div class="top">
                <div class="top-item-left">
                    <div class="close"><v-icon size="50">mdi-close</v-icon></div>
                    <div class="top-avatar">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    </div>
                    <div style="margin-left: 30px;">
                        <h3>{{ user.name }}</h3>
                    </div>
                </div>
                <div class="top-item-right">
                    <div>
                        <span><v-icon>mdi-phone</v-icon></span>
                    </div>
                    <div>
                        <span><v-icon>mdi-video</v-icon></span>
                    </div>
                </div>
            </div>
            <div class="middle">
                <!-- <div class="incomming">
                    <div class="incomming-message">
                        <p style="color: white;">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit recusandae illum reiciendis esse
                            porro asperiores eveniet quos sint mollitia sapiente aspernatur quod nam officiis corrupti
                            laborum, nisi possimus repellat eligendi.
                        </p>
                        <p style="text-align: right; color: white;">12:00PM</p>
                    </div>
                </div>
                <div class="outgoing">
                    <div class="outgoing-message">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sunt recusandae aut mollitia
                            deleniti sit qui quasi ea corrupti eveniet perspiciatis dolorem nisi accusamus non architecto at
                            omnis saepe ex?
                        </p>
                        <p style="text-align: right; color: gray;">12:00PM</p>
                    </div>
                </div> -->
                <div v-for="(message, i) in messages" :key="i" :class="message.type">
                    <div :class="message.type + '-message'">
                        <p :style="message.type === 'incomming' ? `color: white` : null">
                            {{ message.msg }}
                        </p>
                        <p
                            :style="message.type === 'incomming' ? `text-align: right; color: white` : `text-align: right; color: gray;`">
                            12:00PM</p>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="enter-message">
                    <input type="text" @input="onChangeMessage($event)" @keyup.enter="onSend($event)"
                        placeholder="Enter Message" autocomplete="off" />
                </div>
                <div class="send">
                    <button @click="onSend"><v-icon color="white">mdi-send-variant</v-icon></button>
                </div>     
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
export default {
    data() {
        return {
            sendTo: "",
            user: {},
        }
    },
    methods: {

    },
    props: {
        message: String,
        onChangeMessage: Function,
        onSend: Function,
        messages: Array
    },
    mounted() {
        this.sendTo = router.history.current.params.userid;
        // console.log(this.sendTo);

        if (this.sendTo.length !== 0) {
            var requestOptions = {
                method: 'POST',
                redirect: 'follow'
            };

            fetch(`http://localhost:3000/api/v1/auth/getuser/${this.sendTo}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    this.user = result.user
                })
                .catch(error => console.log('error', error));
        }
    },
}
</script>

<style scoped>
.bottom {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 25px;
    padding-right: 10px;
}

.enter-message {
    width: 100%;
    flex-basis: 90%;
    margin-left: 20px;
}

.enter-message input {
    width: 100%;
    border-radius: 10px;
    background-color: rgb(230, 235, 245);
    padding: 10px;
}

.enter-message input:focus {
    outline: none;
}

.send button {
    margin-left: 20px;
    background-color: #3B71CA;
    border-radius: 5px;
    padding: 10px 20px;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

.top {
    display: flex;
    justify-content: space-between;
    padding: 30px 20px;
    align-items: center;
    height: 13vh;
    border-bottom: 0.5px solid gray;
}

.top-avatar img {
    width: 60px;
    border-radius: 100%;
}

.top-item-left {
    display: flex;
    align-items: center;
}

.close{
    color: gray;
    margin-right: 10px;
}

.top-item-right {
    display: flex;
}

.top-item-right div {
    padding: 0px 20px;
}

.top-item-right div span {
    cursor: pointer;
}

.middle {
    height: 80vh;
    padding: 0px 30px;
    border-bottom: 0.5px solid gray;
    overflow: auto;
}

.incomming {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 10px;
}

.outgoing {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.incomming-message {
    font-size: 15px;
    font-weight: 500;
    background-color: #3B71CA;
    width: fit-content;
    max-width: 50%;
    padding: 25px 30px 10px 30px;
    border-radius: 30px 30px 30px 0px;
}

.outgoing-message {
    font-size: 15px;
    font-weight: 500;
    background-color: aliceblue;
    width: fit-content;
    max-width: 50%;
    padding: 25px 30px 10px 30px;
    border-radius: 30px 30px 0px 30px;
}
</style>