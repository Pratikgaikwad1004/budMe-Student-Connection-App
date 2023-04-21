<template><!-- Button trigger modal -->
    <div>
    <button type="button" class="btn btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Show More
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Project Title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae possimus mollitia aspernatur eaque quia distinctio nesciunt est quos animi deleniti.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn-modal{
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 5px;   
    margin: 10px 10px;
}
</style>