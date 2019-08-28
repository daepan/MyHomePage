import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' // This line here
import App from './App.vue'
import VueCookie from 'vue-cookie'
import Vuesession from 'vue-session'


Vue.use(VueCookie)
Vue.use(VueMaterial)
Vue.use(Vuesession)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
