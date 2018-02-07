import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    username: '',
    notifications: [],
  },
  mutations: {
    update_auth: function (state, payload) {
      state.username = payload.username;
    },
    add_notification: function (state, payload) {
      state.notifications.push(payload.msg);
      setTimeout( () => this.commit('rm_notification'), 5000 );
    },
    rm_notification: function (state) {
      state.notifications.shift();
    },
  }
});
