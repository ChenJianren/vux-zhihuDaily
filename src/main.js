// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import router from './router'
import App from './App'
import VueResouse from 'vue-resource'
Vue.use(VueResouse)
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)



// Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
