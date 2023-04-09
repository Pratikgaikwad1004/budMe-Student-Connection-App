<template>
    <div class="main-container">
        <div class="fearures">
            <div id="feature-1">
                <h5>Feature 1</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div id="feature-2">
                <h5>Feature 2</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="card-image">
            <div class="card-img">
                <img src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2957&q=80"
                    height="200" width="300" />
                <button class="btn">Request to join</button>
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
    .card-img img {
        width: 100%;
    }
}

.main-container {
    display: flex;
    width: 40vw;
    background-color: rgb(230, 230, 230);
    justify-content: space-between;
}

#feature-2 {
    margin-top: 20px;
}

.fearures {
    padding: 0px 10px;
    margin-top: 5px;
}

.btn {
    background-color: black;
    color: white;
    border-radius: 20px;
    position: absolute;
    /* bottom: 0; */
}

.card-img {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
</style>