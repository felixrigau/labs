// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CourseList from './components/CourseList'
import Form from './components/Form'

Vue.config.productionTip = false

Vue.component('course-list', CourseList);
Vue.component('course-form', Form);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
