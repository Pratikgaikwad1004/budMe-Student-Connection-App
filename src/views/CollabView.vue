<template>
    <div>
        <AppBar/>
        <h2 class="ongoing">Ongoing Projects</h2>
        <div class="collab-main">
            <div class="project-card">
                <div class="project-items">
                    <ProjectCard/>
                </div>
                <div class="project-items">
                    <ProjectCard/>
                </div>
                <div class="project-items">
                    <ProjectCard/>
                </div>
                <div class="project-items">
                    <ProjectCard/>
                </div>
            </div>
            <div class="joined-card">
                <!-- <h2 style="text-align: center; width: 100%;">Joined Events</h2> -->
                <div class="join-items">
                    <JoinedProjectCard/>
                </div>
                <div class="join-items">
                    <JoinedProjectCard/>
                </div>
                <div class="join-items">
                    <JoinedProjectCard/>
                </div>
                <div class="join-items">
                    <JoinedProjectCard/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import JoinedProjectCard from '@/components/JoinedProjectCard.vue';
import AppBar from '@/components/AppBar.vue'

export default {
    components: { ProjectCard, JoinedProjectCard ,AppBar}
}
</script>

<style scoped>
@media (max-width: 1000px) {

    .ongoing{
        width :100%;
        text-align: center;
        padding-left: auto;
        margin-left: 10px;
        margin-top: 20px;
    }
    .project-card{
        flex-basis: 100%;
        min-width: 100%;
        justify-content: center;
    }
    .joined-card {
        background-color: aqua;
        border: 10px solid white;
        display: none !important;
    }
}

.ongoing{
    width:70%; 
    text-align: center;
}

.collab-main{
    display: flex;
    justify-content: space-between;
}

.project-card{
    display: flex;
    flex-wrap: wrap;
    flex-basis: 70% ;
    justify-content: space-around;
}
.project-items{
    margin-left: 10px;
    margin-top: 20px;
}

.joined-card{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-basis: 30%;
    
}

.join-items{
    width: 90%;
    margin-top: 20px;
    padding-right: 20px;
}
</style>