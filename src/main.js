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

Vue.http.interceptors.push(function (request, next) {
  this.$store.state.showWokingDialog = true
  if (request.method === 'POST') {
    request.headers['Content-Type'] = 'application/json'
  }
  next(function (response) {
    this.$store.state.showWokingDialog = false
  })
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
