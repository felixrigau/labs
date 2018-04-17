<template lang="pug">
.course-list
  h1 Nuestras ofertas formativas
  ul
    li(v-for="course in courseList") 
      course-card(:course="course")
</template>

<script>
  import CourseCard from './CourseCard';
  
  export default {
    components: {
      'course-card': CourseCard
    },
    props: ['courseList']
  };
</script>

<style lang="scss" scope>

</style>