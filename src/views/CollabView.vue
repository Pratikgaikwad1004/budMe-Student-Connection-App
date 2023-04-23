<template>
    <div>
        <AppBar />
        <h2 class="ongoing">Ongoing Projects</h2>
        <div class="collab-main">
            <div class="project-card">

                <div v-for="(project, index) in projects" :key="index" class="project-items">
                    <ProjectCard :updateModal="updateModal" :setCount="setCount" :project="project" :onJoined="onJoined" />
                </div>

            </div>
            <div v-if="joinedProjects.length === 0" class="joined-card">
                <p style="margin-right: 100px;">You have no joined projects</p>
            </div>
            <div v-else class="joined-card">
                <!-- <h2 style="text-align: center; width: 100%;">Joined Events</h2> -->
                <div v-for="(project, index) in joinedProjects" :key="index" class="join-items">
                    <JoinedProjectCard :project="project" :onJoined="onJoined" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import JoinedProjectCard from '@/components/JoinedProjectCard.vue';
import AppBar from '@/components/AppBar.vue'
import router from '@/router';

export default {
    data() {
        return {
            projects: [],
            joinedProjects: [],
            updateModal: 0
        }
    },
    components: { ProjectCard, JoinedProjectCard, AppBar },
    methods: {
        setCount() {
            this.updateModal++;
            // console.log("value", this.updateModal);
        },
        onJoined() {
            try {
                const requestOptions = {
                    method: 'POST',
                    redirect: 'follow'
                };

                fetch("http://localhost:3000/api/v1/project/getrequestedprj/64215451df2dc4b05348ad8d", requestOptions)
                    .then(response => response.json())
                    .then(result => this.joinedProjects = result.myproj)
                    .catch(error => console.log('error', error));
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (!token || !user) {
            router.push("/login");
        }
        try {
            const requestOptions = {
                method: 'POST',
                redirect: 'follow'
            };

            fetch("http://localhost:3000/api/v1/project/getallprojects", requestOptions)
                .then(response => response.json())
                .then(result => this.projects = result.projects)
                .catch(error => console.log('error', error));

            this.onJoined()
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style scoped>
@media (max-width: 1000px) {

    .ongoing {
        width: 100%;
        text-align: center;
        padding-left: auto;
        margin-left: 10px;
        margin-top: 20px;
    }

    .project-card {
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

.ongoing {
    width: 70%;
    text-align: center;
}

.collab-main {
    display: flex;
    justify-content: space-between;
}

.project-card {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 70%;
    justify-content: space-around;
}

.project-items {
    margin-left: 10px;
    margin-top: 20px;
}

.joined-card {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-basis: 30%;

}

.join-items {
    width: 90%;
    margin-top: 20px;
    padding-right: 20px;
}
</style>