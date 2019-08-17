import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Base from './views/base'
import News from './views/News'
import example from './views/example'
import Git from './components/base/Git'
import Os from './components/base/Os'
import Algo from './components/base/Algo'
import dataStr from './components/base/dataStr'
import ComNet from './components/base/ComNet'
import classBind from './components/Vue/classBind'
import login from './components/Vue/login'
import signUp from './components/Vue/signUp'
import storage from './components/Vue/storage'
import AskView from "./components/News/AskView.vue";
import JobsView from "./components/News/JobsView.vue";

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
      path: '/base',
      name: 'base',
      component: Base
    },
    {
      path: '/example',
      name: 'Vue',
      component: example
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
    
  
    {
      path: "/ask",
      name: "ask",
      component: AskView
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView
    },
   
    
  ]
})
