import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Base from './views/base'
import News from './views/News'
import HTML from './views/HTML'
import vue from './views/Vue'
import Git from './components/base/Git'
import Os from './components/base/Os'
import Algo from './components/base/Algo'
import dataStr from './components/base/dataStr'
import ComNet from './components/base/ComNet'
import classBind from './components/Vue/classBind'
import login from './components/HTML/login'
import signUp from './components/HTML/signUp'
import storage from './components/HTML/storage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/HTML',
      name: 'HTML',
      component: HTML
    },
    {
      path: '/base',
      name: 'base',
      component: Base
    },
    {
      path: '/Vue',
      name: 'Vue',
      component: vue
    },
    {
      path: '/Git',
      name: 'Git',
      component: Git
    },
    {
      path: '/Os',
      name: 'Os',
      component: Os
    },
    {
      path: '/ComNet',
      name: 'ComNet',
      component: ComNet
    },
    {
      path: '/Algo',
      name: 'Algo',
      component: Algo
    },
    {
      path: '/dataStr',
      name: 'dataStr',
      component: dataStr
    },
    {
      path: '/classBind',
      name: 'classBind',
      component: classBind
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/storage',
      name: 'storage',
      component: storage
    },
  ]
})
