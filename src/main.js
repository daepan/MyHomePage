import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' // This line here
import App from './App.vue'
// Require dependencies
import VueCookie from'vue-cookie'
import VueSession from 'vue-session'

Vue.use(VueCookie);
Vue.use(VueMaterial);
Vue.use(VueSession);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueCookie,
  render: h => h(App),
}).$mount('#app')
