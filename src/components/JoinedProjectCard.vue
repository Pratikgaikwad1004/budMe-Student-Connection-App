<template>
    <div>
        <div class="card-main">
            <div class="card-top">
                <div class="card-img">
                    <img src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2957&q=80"
                    height="100" width="100" />
                </div>
                <div>
                    <button class="btn">Leave project group</button>
                </div>
            </div>
            <div style="margin-top: 20px;">
                <h5>Project Name</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.card-img img {
    border-radius: 50px;
}
.btn {
    background-color: #000;
    color: white;
    border-radius: 20px;
}
.card-main {
    background-color: rgb(222, 221, 221);
    width: 400px;
    padding: 10px;
    border-radius: 5px;
}
.card-top {
    display: flex;
}
</style>