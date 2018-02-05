import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router.js'

Vue.component('Foo', require('./Foo.vue'));

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
