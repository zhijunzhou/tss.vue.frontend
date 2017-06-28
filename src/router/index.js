import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import CSHome from '@/views/CSHome'
import AllOppty from '@/views/AllOppty'
import MyOppty from '@/views/MyOppty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/cs/:opptyId',
      name: 'cs',
      component: CSHome
    }, {
      path: '/oppties/my',
      name: 'my',
      component: MyOppty
    }, {
      path: '/oppties/all',
      name: 'all',
      component: AllOppty
    }
  ]
})
