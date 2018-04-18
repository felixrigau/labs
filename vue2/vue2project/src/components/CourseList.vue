<template lang="pug">
.course-list
  h1.course-list__title Nuestras ofertas formativas
  ul.course-list__list
    li.course-list__item-list(v-for="course in courseList") 
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

  @import "./static/stylesheets/media_queries.scss";

  .course-list__title {
    font-size: 26px;
    color: #023a67;
    margin-bottom: 35px;
    text-align: center;
    
    @include tablet {
      font-size: 32px;
    }
    
    @include desktop {
        font-size: 48px;
    }
  }

  .course-list__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    
    @include desktop {
      margin: 0 -10px;
    }
  }
  
  .course-list__item-list {
    margin: 10px;
    max-width: 100%;
    min-width: 20%;
    width: 100%;
    
    @include tablet {
      max-width: 45%;
    }
    
    @include desktop {
        max-width: 20%;
    }
  }
</style>