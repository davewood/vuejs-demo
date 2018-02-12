<template>
<b-container fluid id="app">

  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-brand href="#">VueJS Demo</b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item to="/foo">Foo</b-nav-item>
      <b-nav-item to="/bar">Bar</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-button-group>
        <b-button
          v-for="(lang,i) in ['en','de']" :key="i"
          :class="{active: $i18n.locale === lang}"
          @click="$i18n.locale = lang; ">
          {{ lang }}
        </b-button>
      </b-button-group>
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
  components: {
    'foo': Foo,
    'bar': Bar,
  },
  watch: { '$i18n.locale': function(val){this.$notify('switched to "'+val+'"')} }
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
