<template lang="pug">
.form  
  input(v-model="course.title" placeholder="Título del Curso")
  input(v-model="course.subTitle" placeholder="Breve Description")
  input(v-model="course.startDate" type="date")
  input(v-model="course.endDate" type="date")
  button(v-on:click="add") ADD
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
      },
    }
  },
  props: ['courseList'],
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
      return formatDate.toLocaleDateString('es-ES', options);
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
  }
  /*
  Para validar con las fechas:
  startDate tiene que ser menos que endDate
  endDate no puede ser meno que startDate
  No pueden ser iguales
  */
}
</script>

<style lang="scss">
  
</style>