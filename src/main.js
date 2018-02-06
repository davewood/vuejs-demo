import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router.js'
import notify from './notify.js'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'vue-awesome/icons/flag' // import used icons to minimize build size
import Icon from 'vue-awesome/components/Icon'
import i18n from './i18n.js'

Vue.use(BootstrapVue);

Vue.component('icon', Icon)
Vue.component('notify', notify);
Vue.component('Foo', require('./Foo.vue'));

new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: h => h(App)
})
