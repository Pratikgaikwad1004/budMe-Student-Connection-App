<template>
  <!-- Button trigger modal -->
  <div>
    <button type="button" class="btn btn-modal" @click="setCount()" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Show More
    </button>

    <!-- Modal -->
    <div class="modal fade" :key="updateModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ project.title }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ project.description }}
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
  props: {
    project: Object,
    setCount: Function,
    updateModal: Number
  },
  methods: {
    // setCount() {
    //   console.log(this.project);
    // }
  },
  watch: {
    project: function (newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-modal {
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 5px;
  margin: 10px 10px;
}
</style>