import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from './Foo.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: Foo }
];

export default new VueRouter({
  routes
});
