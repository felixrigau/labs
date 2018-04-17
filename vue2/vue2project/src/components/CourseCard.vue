<template lang="pug">
.course-card
    p(v-bind:class="classObject") {{course.title}}
    p {{course.subTitle}}
    p {{course.startDate}}
    p {{course.endDate}}
    p(v-if="courseStatus") {{courseStatus}}
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
          'finished': this.course.finished && this.course.finished === true,
          'inprogress': this.course.inProgress && this.course.inProgress === true,  
          'tostart': this.course.toStart && this.course.toStart === true
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
    $finished: #cfd8dc;
    $inprogress: #ffb300;
    $tostart: #64b5f6;
    
    .finished {
      background-color: $finished;
    }
    
    .inprogress {
      background-color: $inprogress;
    }
    
    .tostart {
      background-color: $tostart;
    }
</style>