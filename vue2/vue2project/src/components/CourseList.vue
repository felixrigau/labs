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
    p {{course.title}}
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
          //En curso: now() > startDate && now() < endDate
          //Por comenzar: now() < startDate
          //Terminado: now() > endDate
        },
        courseList: []
      }
    },
    methods: {
      add: function() {
        this.course.startDate = this.$_dateForm(this.course.startDate)
        this.course.endDate = this.$_dateForm(this.course.endDate)
        this.courseList.push(this.course);
      },
      $_dateForm: function(date){
        var formatDate = new Date(date);
        var options = { year: 'numeric', month: 'long', day: 'numeric' }; 
        return formatDate.toLocaleDateString('es-ES', options)
      }
    }
  };
</script>

<style lang="scss" scope>
$finished: #cfd8dc;
$inprogress: #ffb300;
$tostart: #64b5f6;

</style>