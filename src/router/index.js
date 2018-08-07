import Vue from 'vue'
import Router from 'vue-router'
import Course from '@/components/Course'
import DegreeCourse from '@/components/DegreeCourse'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/course/',
      name: '专题课',
      component: Course
    },
    {
      path: '/degreecourse/',
      name: '学位课',
      component: DegreeCourse
    },

  ]
})
