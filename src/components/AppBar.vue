<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid d-flex">

                <a class="navbar-brand" style="color: black" href="#">ConnectMe</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" style="color: black" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="color: black" href="#">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="color: black" href="#">Collab</a>
                        </li>
                    </ul>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav nav-right">
                        <li class="nav-item">
                            <a class="nav-link" style="color: black" href="#">Add Event</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="color: black" href="#">Add Project</a>
                        </li>
                        <v-icon size="30px" class="chat-icon">mdi-chat</v-icon>
                    </ul>
                </div>
                <a class="btn btn-primary logout-btn" href="#" role="button">Logout</a>
            </div>
        </nav>
    </div>
</template>

<script>
// import bootstrap from 'bootstrap';
export default {

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
    
}
.logout-btn{
    background-color: white;
}

</style>