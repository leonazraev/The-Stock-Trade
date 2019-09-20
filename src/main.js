import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue  from 'bootstrap-vue'
import {routes} from './assets/routes.js'
import {store} from './store/store.js'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
const router = new VueRouter({
  routes,
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

