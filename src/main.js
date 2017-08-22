// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
// Vue.use(VueMaterial)
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.http.options.root = 'https://localhost/tss/api'
// Vue.http.options.xhr = { withCredentials: true }
// Vue.http.headers.common['Authorization'] = 'Basic emhpanVuLnpob3VAaHBlLmNvbTpGZW5nMTk5MiY='

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
