import Vue from 'vue';
import { mapState } from 'vuex';

// install global $notify method
// and return notification component
// for installation in #app

const component = {
  template: '<div><div v-for="n in notifications">{{ n }}</div></div>',
  computed: mapState(['notifications']),
};

const plugin = {
  install: function(Vue, options) {
    Vue.prototype.$notify = function(msg) {
      this.$store.commit('add_notification', {msg: msg});
    }
  }
};

Vue.use(plugin);
export default component;
