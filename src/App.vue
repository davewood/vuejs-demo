<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/foo">foo</router-link>
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>

import Foo from './Foo.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'foo': Foo
  }
}
</script>

<style scoped>
</style>
