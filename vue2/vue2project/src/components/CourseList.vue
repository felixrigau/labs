<template lang="pug">
.course-list
  input(v-model="course.title" placeholder="Título del Curso")
  input(v-model="course.subTitle" placeholder="Breve Description")
  input(v-model="course.startDate" type="date")
  input(v-model="course.endDate" type="date")
  button(v-on:click="add") ADD
  
  h1 Nuestras ofertas formativas
  ul
    li(v-for="course in courseList") 
      course-card
      p(v-bind:class="classObject") {{course.title}}
      p {{course.subTitle}}
      p {{course.startDate}}
      p {{course.endDate}}
</template>

<script>
  import CourseCard from './CourseCard';
  
  export default {
    components: {
      'course-card': CourseCard
    },
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
        courseList: []
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
      add: function() {
        let courseCopy = Object.assign({}, this.course);
        courseCopy = this.assignStatus(courseCopy);
        courseCopy.startDate = this.dateForm(courseCopy.startDate);
        courseCopy.endDate = this.dateForm(courseCopy.endDate);
        this.courseList.push(courseCopy);
      },
      dateForm: function(date){
        let formatDate = new Date(date),
            options = { year: 'numeric', month: 'long', day: 'numeric' }; 
        return formatDate.toLocaleDateString('es-ES', options)
      },
      assignStatus: function(course){
        let now = Date.now(),
            startDate = new Date(course.startDate),
            endDate = new Date(course.endDate);
        
        if (now >= startDate.getTime() && now <= endDate.getTime()) {
          course.inProgress = true;
        } 
        else if (now < startDate.getTime()){
          course.toStart = true;
        } else {
          course.finished = true;
        }
        return course;
      }
      /*
      Para validar con las fechas:
      startDate tiene que ser menos que endDate
      endDate no puede ser meno que startDate
      No pueden ser iguales
      */
    }
  };
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