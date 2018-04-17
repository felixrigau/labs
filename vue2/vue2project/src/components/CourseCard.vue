<template lang="pug">
.course-card
    p(v-bind:class="classObject") {{course.title}}
    p {{course.subTitle}}
    p {{course.startDate}}
    p {{course.endDate}}
</template>

<script>
  export default {
    data() {
      return {
        course: {
          title: '',
          subTitle: '',
          startDate: null,
          endDate: null,
          toStart: false,
          finished: false,
          inProgress: false
        },
      }
    },
    computed: {
      classObject: function () {
        console.log('this.course.finished', this.course.finished)
        console.log('this.course.toStart', this.course.toStart)
        console.log('this.course.inProgress', this.course.inProgress)
        return {
          'finished': this.course.finished && this.course.finished === true,
          'inprogress': this.course.inProgress && this.course.inProgress === true,  
          'tostart': this.course.toStart && this.course.toStart === true
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