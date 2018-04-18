<template lang="pug">
form(@submit="validateForm" action="x" method="post")
  p(v-if="errors.length")
    b Please correct the following error(s):
    ul
      li(v-for="error in errors") {{ error }}
  input(v-model="course.title" placeholder="Título del Curso")
  input(v-model="course.subTitle" placeholder="Breve Description")
  input(v-model="course.startDate" type="date")
  input(v-model="course.endDate" type="date")
  input(type="submit" value="Agregar otro curso")
</template>

<script>
export default {
  data() {
    return {
      errors:[],
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
    },
    validateForm: function(e) {
      let now = Date.now(),
          startDate = new Date(this.course.startDate),
          endDate = new Date(this.course.endDate);
      this.errors = [];
      if(!this.course.title) this.errors.push("El título es obligatorio.");
      if(!this.course.subTitle) this.errors.push("La descripción es obligatoria.");
      if(!this.course.startDate) this.errors.push("La fecha de comienzo es obligatoria.");
      if(!this.course.endDate) this.errors.push("La fecha de terminación es obligatoria.");
      if(startDate.getTime() > endDate.getTime()) this.errors.push("Las fechas deben tener un orden lógico.");
      if(startDate.getTime() === endDate.getTime()) this.errors.push("Las fechas no pueden ser iguales.");
      
      if(this.errors.length) {
        e.preventDefault();
      } else {
        this.add();
        this.cleanValues();
        e.preventDefault();
      }
    },
    cleanValues: function() {
      this.course.title = '';
      this.course.subTitle = '';
      this.course.startDate = null;
      this.course.endDate= null;
    }
  }
  /*
  Para validar el formulario:
  startDate tiene que ser menor que endDate
  endDate no puede ser menor que startDate
  No pueden ser iguales
  Los campos son obligatorios
  */
}
</script>

<style lang="scss">
  
</style>