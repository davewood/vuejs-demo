<template>
<b-container fluid id="app">
  <notify id="notify"></notify>
  <img src="./assets/logo.png">
  <router-link to="/foo">foo</router-link>
  <h1>{{ msg }}</h1>
  <router-view></router-view>
</b-container>
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
  },
}
</script>

<style scoped>
#notify {
    width: 200px;
    position: fixed;
    top: 60px;
    right: 25px;
    z-index: 1001;
}
</style>
