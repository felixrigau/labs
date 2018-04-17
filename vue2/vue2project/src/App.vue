<template lang="pug">
  .app
    img(src="./assets/logo.png")
    course-form(:courseList="courseList")
    course-list(:courseList="courseList")
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      courseList: []
    }
  },
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
