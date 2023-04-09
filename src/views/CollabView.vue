<template>
    <div>
        <div class="collab-main">
            <div class="sidebar">
                <div style="height: 100vh; display: flex; align-items: center; position: fixed;">
                    <SideBar />
                </div>
            </div>
            <div class="projects">
                <div style="margin-top: 20px;">
                    <ProjectCard />
                </div>
                <div style="margin-top: 20px;">
                    <ProjectCard />
                </div>
                <div style="margin-top: 20px;">
                    <ProjectCard />
                </div>
                <div style="margin-top: 20px;">
                    <ProjectCard />
                </div>
                <div style="margin-top: 20px;">
                    <ProjectCard />
                </div>
            </div>
            <div class="joined">
                <div style="margin-top: 20px;">
                    <JoinedProjectCard />
                </div>
                <div style="margin-top: 20px;">
                    <JoinedProjectCard />
                </div>
                <div style="margin-top: 20px;">
                    <JoinedProjectCard />
                </div>
                <div style="margin-top: 20px;">
                    <JoinedProjectCard />
                </div>
                <div style="margin-top: 20px;">
                    <JoinedProjectCard />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import JoinedProjectCard from '@/components/JoinedProjectCard.vue';

export default {
    components: { SideBar, ProjectCard, JoinedProjectCard }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1300px) {
    .sidebar {
        display: none;
    }

    .projects {
        flex-basis: 70%;
        // border: 1px solid red;
        width: 70vw;
    }

    .joined {
        flex-basis: 30%;
    }
}
@media only screen and (max-width: 1050px) {
    .projects {
        flex-basis: 100%;
        // border: 1px solid red;
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .joined {
        display: none;
    }
}
@media only screen and (max-width: 550px) {
    .projects {
        flex-basis: 100%;
        // border: 1px solid red;
        min-width: 100vw;
    }
}

.sidebar {
    flex-basis: 20%;
    margin-left: 20px;
}

.projects {
    flex-basis: 50%;
}

.joined {
    flex-basis: 30%;
}

.collab-main {
    display: flex;
    justify-content: space-around;
}</style>