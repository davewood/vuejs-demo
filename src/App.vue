<template>
<b-container fluid id="app">

  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-brand href="#">VueJS Demo</b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item to="/foo">Foo</b-nav-item>
      <b-nav-item to="/bar">Bar</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown :text="locale" right>
        <b-dropdown-item @click="locale = 'de'">de</b-dropdown-item>
        <b-dropdown-item @click="locale = 'en'">en</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-navbar>

  <notify id="notify"></notify>
  <img src="./assets/logo.png">
  <h1>{{ $t('welcome') }}</h1>
  <router-view></router-view>
</b-container>
</template>

<script>
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
  name: 'app',
  data () {
    return {
      locale: 'de',
    }
  },
  watch: {
    locale: function(val) { this.$i18n.locale = val; this.$notify('switched to: '+val); }
  },
  components: {
    'foo': Foo,
    'bar': Bar,
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
