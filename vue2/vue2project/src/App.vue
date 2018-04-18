<template lang="pug">
  .app
    section.courses
      <!--img(src="./assets/logo.png")-->
      course-form(:courseList="courseList")
      course-list(:courseList="courseList")
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      courseList: [
        {
          endDate:"24 de junio de 2018",
          startDate:"24 de mayo de 2018",
          subTitle:"Aprenda JavaScript de principio a fin",
          title:"Master en programación de aplicaciones con JavaScript y NodeJS",
          toStart:true
        },
        {
          endDate:"30 de abril de 2018",
          inProgress:true,
          startDate:"4 de abril de 2018",
          subTitle:"Dejese llevar de la mano del prestigioso chef Jean Luc Cuer",
          title:"Taller de pastelería francesa"
        },
        {
          endDate:"9 de abril de 2018",
          finished:true,
          startDate:"5 de abril de 2018",
          subTitle:"Aprenda con nativo a dansar al ritmo de los tambores",
          title:"Curso de Kapoveira"
        },
        {
          endDate:"24 de junio de 2018",
          startDate:"24 de mayo de 2018",
          subTitle:"Aprenda JavaScript de principio a fin",
          title:"Master en programación de aplicaciones con JavaScript y NodeJS",
          toStart:true
        },
        {
          endDate:"30 de abril de 2018",
          inProgress:true,
          startDate:"4 de abril de 2018",
          subTitle:"Dejese llevar de la mano del prestigioso chef Jean Luc Cuer",
          title:"Taller de pastelería francesa"
        },
        {
          endDate:"9 de abril de 2018",
          finished:true,
          startDate:"5 de abril de 2018",
          subTitle:"Aprenda con nativo a dansar al ritmo de los tambores",
          title:"Curso de Kapoveira"
        },
        {
          endDate:"24 de junio de 2018",
          startDate:"24 de mayo de 2018",
          subTitle:"Aprenda JavaScript de principio a fin",
          title:"Master en programación de aplicaciones con JavaScript y NodeJS",
          toStart:true
        },
        {
          endDate:"30 de abril de 2018",
          inProgress:true,
          startDate:"4 de abril de 2018",
          subTitle:"Dejese llevar de la mano del prestigioso chef Jean Luc Cuer",
          title:"Taller de pastelería francesa"
        },
        {
          endDate:"9 de abril de 2018",
          finished:true,
          startDate:"5 de abril de 2018",
          subTitle:"Aprenda con nativo a dansar al ritmo de los tambores",
          title:"Curso de Kapoveira"
        }
        ]
    }
  },
}
</script>

<style>
.app {
  color: #2c3e50;
}
</style>
