<template>
  <div class="row">
    <div class="col-md-9 col-md-offset-1">
      <div class="jumbotron">
        <h1>专题课!!</h1>
        <div class="panel panel-success" v-for="item in course_list">
          <div class="panel-heading">
            {{item.name}}
          </div>
          <div class="panel-body">
            {{item.course_type}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Course",
    computed:{
      course_list:function () {
        return this.$store.state.courselist
      }
    }
  }
</script>

<style scoped>

</style>
