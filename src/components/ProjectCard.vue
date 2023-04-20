<template>
    <div class="main-container">
        <div class="project-details">
                <h1>Title</h1>
                <h5>Description</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div class="buttons">
                    <button class="show-btn">More details</button>
                    <button class="join-btn">Request to join</button>
                </div>
        </div>
        <div class="project-image">
            <div class="project-img">
                <img src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2957&q=80"
                    height="200" width="300" />
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 1300px) {
    .main-container {
        min-width: 60vw;
        border: 1px;
    }
}
@media only screen and (max-width: 1000px) {
    .main-container {
        min-width: 90vw;
        border: 1px;
    }
}
@media only screen and (max-width: 550px) {
    .main-container {
        flex-wrap: wrap;
        flex-direction: column-reverse;
        min-width: 230px;
        border: 1px solid black;
        justify-content: center;
    }
    .project-img img {
        width: 100%;
    }
}

.main-container {
    display: flex;
    width: 40vw;
    background-color: #cdc8d8;
    justify-content: space-between;
    border-radius: 10px;
}



.project-details{
    padding: 0px 10px;
    margin-top: 5px;
}


.join-btn{
    background-color: white;
    color: black;
    font-weight: 500;
    border-radius: 5px;
    padding: 5px;   
    margin: 10px 10px;
}
.show-btn {
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 5px;   
    margin: 10px 10px;
}

.project-img {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
</style>