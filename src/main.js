
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue  from 'bootstrap-vue'
import {routes} from './assets/routes.js'
import {store} from './store/store.js'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true
Vue.http.options.root = 'https://stock-trader-90785.firebaseio.com/';

const router = new VueRouter({
  routes,
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),

})

