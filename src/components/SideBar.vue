<template>
    <div class="main">
        <div style="height: 100%;">
            <div class="main-2">
                <ul class="menu" style="">
                    <li><v-icon color="black" size="50px">mdi-home-account</v-icon></li>
                    <li><v-icon color="black" size="50px">mdi-calendar-blank-multiple</v-icon></li>
                    <li><v-icon color="black" size="50px">mdi-message-outline</v-icon></li>
                    <li><v-icon color="black" size="50px">mdi-account-group-outline</v-icon></li>
                    <li><v-icon color="black" size="50px">mdi-account-outline</v-icon></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
    list-style-type: none;
}

.main {
    height: 100%;
    justify-content: center;
    width: 100%;
    padding: 0px 10px;
}

.main-2 {
    height: 100%;
    display: flex;
    align-content: center;
    align-items: flex-start;
    margin-top: 100px;
}

.menu {
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border: 1px solid black;
    padding: 10px 0px;
    margin-left: 20px;
    border-radius: 40px;
    background-color: rgb(211, 209, 209);
}
ul li {
    padding: 10px;
    cursor: pointer;
}
ul li:hover {
    background-color: darkgray;
    border-radius: 20px;
}
</style>