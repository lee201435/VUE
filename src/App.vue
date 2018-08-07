<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            首页
            <router-link to="/course/">专题课</router-link>
            <router-link to="/degreecourse/">学位课</router-link>
          </a>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'

  export default {
    name: 'App'
  }
</script>

<style>
  #app {

  }
</style>
