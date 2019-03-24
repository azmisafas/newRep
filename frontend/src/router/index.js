import Vue from 'vue'
import Router from 'vue-router'
import Quizwa from '@/components/Muskquiz'
import Create from '@/components/Create'
import View from '@/components/View'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Muskuis',
      name: 'Quizw',
      component: Quizwa
    },
    {
      path: '/Add',
      name: 'Create',
      component: Create
    },
    {
      path: '/siswa/:id',
      name: 'SiswaEdit',
      component: Create
    },
    {
      path: '/siswa',
      name: 'View',
      component: View
    }
  ]
})
