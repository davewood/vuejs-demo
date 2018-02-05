import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    notifications: []
  },
  mutations: {
    update_auth: function (state, payload) {
      state.username = payload.username;
    },
    add_notification: function (state, payload) {
      state.notifications.push(payload.msg);
      setTimeout( function() { state.notifications.shift() }, 5000 );
    }
  }
});
