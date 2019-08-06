import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Base from './views/base'
import News from './views/News'
import HTML from './views/HTML'
import vue from './views/Vue'
import Git from './components/base/Git'
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
    }
  ]
})
