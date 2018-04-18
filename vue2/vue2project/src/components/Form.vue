<template lang="pug">
form(class="form" @submit="validateForm" action="x" method="post")
  .form__input-group
    .form__input-wrapper
      label(for="title") Título: 
        span.required *
      input(id="title" class="form__title" name="title" v-model="course.title" placeholder="Título del Curso")
    
    .form__input-wrapper
      label(for="subTitle") Descripción
        span.required *
      input(id="subTitle" class="form__subtitle" name="subTitle" v-model="course.subTitle" placeholder="Breve Description")
    
    .form__input-wrapper
      label(for="startDate") Fecha de inicio:
          span.required *
      input(id="startDate" class="form__startdate" name="startDate" v-model="course.startDate" type="date")
    
    .form__input-wrapper
      label(for="endDate") Fecha de inicio:
        span.required *
      input(id="endDate" class="form__enddate" name="endDate" v-model="course.endDate" type="date")
    
    input(type="submit" class="form__button" value="Agregar")
    
  .form__errors-wrapper(v-if="errors.length")
    p Por favor, corrija los siguientes errores:
    ul
      li(v-for="error in errors") {{ error }}
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
      this.courseList.unshift(courseCopy);
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
      if(this.course.startDate && this.course.startDate && startDate.getTime() === endDate.getTime()) this.errors.push("Las fechas no pueden ser iguales.");
      
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
}
</script>

<style lang="scss" scope>

  @import "./static/stylesheets/media_queries.scss";
  
  .form {
    display: flex;
    flex-direction: column;
    margin: 0 auto 50px;
  }
  
  .form__input-group {
    text-align: center;
    
    @include desktop {
      align-items: flex-end;
      display: flex;
      justify-content: center;
    }
  }
  
  .form__input-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 10px 10px;
    
    @include desktop {
      margin: 0 10px 0 0;
    }
    
    label {
      color: #607d8b;
      font-size: 12px;
      margin-bottom: 3px;
      text-align: left;
      
      span {
        color: #c62828;
        margin: 0 0 4px 2px;  
      }
    }
    
    input {
      border: 2px solid #023a67;
      color: #757575;
      height: 35px;

      @include desktop {
        padding: 0 10px
      }
    }
  }
  
  .form__title, .form__subtitle {
    width: 100%;
    
    @include desktop {
      width: 300px;
    }
  }
  
  .form__button {
    border: 2px solid #023a67;
    background-color: #023a67;
    color: white;
    cursor: pointer;
    font-weight: bold;
    height: 39px;
    text-transform: uppercase;
    width: 150px;
    transition: background-color 0.5s ease-in;
    
    &:hover {
      background-color: #2970a9;
    }
  }
  
  .form__errors-wrapper {
    margin-top: 10px;
    padding: 15px;
    background-color: #ffcdd2;
    border: 2px solid #c62828;
    
    p {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    li {
      border-left: 3px solid #c62828;
      margin-bottom: 10px;
      padding: 5px;
      font-size: 14px;
    }
  }
</style>