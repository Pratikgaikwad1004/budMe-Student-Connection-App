<template>
    <div>
        <AppBar />
        <div class="main container">

            <div class="requests">

                <div class="request-cards">
                    <ProjectRequestCard />
                </div>
                <div class="request-cards">
                    <ProjectRequestCard />
                </div>
                <div class="request-cards">
                    <ProjectRequestCard />
                </div>
                
            </div>

        </div>
    </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import ProjectRequestCard from '@/components/ProjectRequestCard.vue'

export default {
    components: { AppBar, ProjectRequestCard }
}
</script>

<style lang="scss" scoped>
.main{
    border: 2px solid black;
    width:100%;
    height: 90vh;
}

.requests{
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.request-cards{
    margin: 10px;
    // display: flex;
    
}
</style>