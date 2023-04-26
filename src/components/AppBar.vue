<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid d-flex">

                <p class="navbar-brand" style="color: black; cursor: pointer;" @click="$router.push('/')">ConnectMe</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <p class="nav-link active" style="color: black; cursor: pointer;" aria-current="page" @click="$router.push('/')">Home</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" style="color: black; cursor: pointer;" @click="$router.push('/happening')">Events</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" style="color: black; cursor: pointer;" @click="$router.push('/collab')">Collab</p>
                        </li>
                    </ul>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav nav-right">
                        <li class="nav-item">
                            <a class="nav-link" style="color: black" href="/projectrequests">Project Requests</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="color: black" href="/registerevent">Add Event</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="color: black" href="/registerproject">Add Project</a>
                        </li>
                        <v-icon size="30px" @click="$router.push('/chat')" class="chat-icon">mdi-chat</v-icon>
                    </ul>
                </div>
                <!-- <p class="btn btn-primary logout-btn" style="color: blue;" @click="Logout()" role="button">Logout</p> -->
                <v-icon size="40px" class="logout" @click="Logout()">mdi-logout</v-icon>
            </div>
        </nav>
    </div>
</template>

<script>
import router from '@/router';
export default {
    methods: {
        Logout() {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            router.push("/login")
        }
    }
}
</script>

<style lang="scss" scoped>
.aapbar{
    display: flex;
    justify-content: flex-end;
}

.nav-right{
    margin-right: 15px;
}

.chat-icon{
    margin:0px 5px;
    cursor : pointer;
}

.logout{
    margin-right: 10px;
    color: black;
    margin-bottom: 5px;
}

</style>