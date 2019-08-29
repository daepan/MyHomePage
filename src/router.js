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
import Vueins from "./components/Vue/Vueins"
import signIn from "./components/SignIn/signIn"
import startingVue from "./components/Vue/starting"
import eventhandler from "./components/Vue/eventhandler"
import myprofile from "./components/mypage/myprofile"

Vue.use(Router)

const requireAuth = () => (to, from, next) => {
  let token = localStorage.getItem("id_token")
  if ( token == 'qw04011@gmail.com') {
    return next();
  }
  console.log("ch")
  alert("로그인을 해주세요!")
  next('/signIn');
};

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
      component: example,
      beforeEnter: requireAuth()
    },
    {
      path: '/Git',
      name: 'Git',
      component: Git,
      beforeEnter: requireAuth()
    },
    {
      path: '/Os',
      name: 'Os',
      component: Os,
      beforeEnter: requireAuth()
    },
    {
      path: '/ComNet',
      name: 'ComNet',
      component: ComNet,
      beforeEnter: requireAuth()
    },
    {
      path: '/Algo',
      name: 'Algo',
      component: Algo,
      beforeEnter: requireAuth()
    },
    {
      path: '/dataStr',
      name: 'dataStr',
      component: dataStr,
      beforeEnter: requireAuth()
    },
    {
      path: '/classBind',
      name: 'classBind',
      component: classBind,
      beforeEnter: requireAuth()
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter: requireAuth()
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp,
      beforeEnter: requireAuth()
    },
    {
      path: '/storage',
      name: 'storage',
      component: storage,
      beforeEnter: requireAuth()
    },
    {
      path: '/Vueins',
      name: 'Vueins',
      component: Vueins,
      beforeEnter: requireAuth()
    },
   
    {
      path: '/eventhandler',
      name: 'eventhandeler',
      component: eventhandler,
      beforeEnter: requireAuth()
    },
    {
      path: '/startingVue',
      name: 'startingVue',
      component: startingVue,
      beforeEnter: requireAuth()
    },
    {
      path: '/profile',
      name: 'profile',
      component: myprofile,
      beforeEnter: requireAuth()
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn,
      
    },
  
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: requireAuth()
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      beforeEnter: requireAuth()
    },
   
    
  ]
})
