<template>
    <div>
        <div class="chat-main">
            <div class="chat-top">
                <h2>Chats</h2>
                <div class="chat-search">
                    <span style="flex-basis: 10%;"><v-icon>mdi-magnify</v-icon></span>
                    <input style="flex-basis: 90%;" type="text" placeholder="Search Users" />
                </div>
            </div>

            <div class="chat-bottom">
                <h3>Recent</h3>
                <div class="chat-list">
                    <div class="active" style="margin-top: 10px; cursor: pointer;">
                        <ChatUserCard />
                    </div>
                    <div class="" style="margin-top: 10px; cursor: pointer;">
                        <ChatUserCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ChatUserCard from './ChatUserCard.vue'
    export default {
  components: { ChatUserCard },
        
    }
</script>

<style scoped>
.chat-main {
    background-color: #f5f7fb;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
}
.chat-top h2 {
    color: #495057;
    font-family: Public Sans,sans-serif;
    font-weight: 600;
}
.chat-top {
    padding: 30px 30px 10px 30px;
}
.chat-search {
    margin-top: 20px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    border-radius: 10px;
    background-color: rgb(230,235,245);
}
.chat-search input {
    padding: 10px;
    
}
.chat-search input:focus {
    outline: none;
}
.chat-bottom {
    padding: 10px 30px 30px 30px;
}
.chat-bottom h3 {
    color: #495057;
    font-family: Public Sans,sans-serif;
    font-weight: 600;
}
.chat-list {
    margin-top: 10px;
    height: 80vh;
    /* padding-bottom: 100%; */
    overflow: auto;
}
.active {
    background: rgb(230,235,245);
    border-radius: 5px;
}
.chat-list::-webkit-scrollbar {
  width: 0.5em;
}
 
.chat-list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
 
.chat-list::-webkit-scrollbar-thumb {
  background-color: gray;
  outline: 1px solid gray;
  border-radius: 10px;
  width: 0.5em;
}
</style>