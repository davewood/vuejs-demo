<template>
<b-container fluid id="app">
  <notify id="notify"></notify>
  <b-form-select id='select-locale' v-model="locale" :options="['de','en']" class="mb-3" />
  <div>selected locale: {{ locale }}</div>
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
      locale: 'de',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    locale: function(val) { this.$i18n.locale = val; }
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
#select-locale {
    width: 100px;
}
</style>
