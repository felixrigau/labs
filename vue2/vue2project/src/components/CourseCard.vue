<template lang="pug">
.course-card
    p.course-card__title(v-bind:class="classObject") {{course.title}}
    p.course-card__subtitle {{course.subTitle}}
    p.course-card__date-label Fecha de inicio
    p.course-card__startDate {{course.startDate}}
    p.course-card__date-label Fecha de fin
    p.course-card__endDate {{course.endDate}}
    p.course-card__courseStatus(v-if="courseStatus") {{courseStatus}}
</template>

<script>
  export default {
    props: ['course'],
    data() {
      return {
        
      }
    },
    computed: {
      classObject: function () {
        return {
          'course-card__title--finished': this.course.finished && this.course.finished === true,
          'course-card__title--inprogress': this.course.inProgress && this.course.inProgress === true,  
          'course-card__title--tostart': this.course.toStart && this.course.toStart === true
        }
      },
      courseStatus: function () {
        if (this.course.finished) {
          return 'Terminado';
        } 
        else if (this.course.inProgress){
          return 'En progreso';
        } 
        else {
          return false
        }
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scope>

  @import "./static/stylesheets/media_queries.scss";

  $finished: #cfd8dc;
  $inprogress: #ffb300;
  $tostart: #64b5f6;
  
  .course-card {
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
    display: flex;
    flex: 0;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 0px 4px 0px #eeeeee;  
  }
  
  .course-card__title {
    color: white;
    font-size: 24px;
    line-height: 28px;
    padding: 14px;
    text-align: center;
    
    @include tablet {
      text-align: right;
    }
  }  
  
  .course-card__title--finished {
    background-color: $finished;
  }
  
  .course-card__title--inprogress {
    background-color: $inprogress;
  }
  
  .course-card__title--tostart {
    background-color: $tostart;
  }
  
  .course-card__subtitle {
    color: #868383;
    border-bottom: 1px solid #eeeeee;
    margin: 10px;
    padding-bottom: 10px;
    text-align: center;
  }
  
  .course-card__date-label {
    font-weight: bold;
    font-size: 11px;
    margin: 0 10px 5px 10px;
  }
  
  .course-card__startDate, .course-card__endDate {
    margin: 0 20px 10px;
    font-style: italic;
  }
  
  .course-card__courseStatus {
    background-color: #ef5350;
    color: white;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
  }
</style>