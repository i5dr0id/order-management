import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import user from './modules/user';
import shared from './modules/shared';
import ui from './modules/ui';

const initState = {
  user: user.state,
  shared: shared.state,
  ui: ui.state,
};

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: '__order_mgt',
  storage: window.localStorage,
  modules: ['shared', 'user', 'ui'],
});

export default new Vuex.Store({
  namespaced: true,
  plugins: [vuexPersist.plugin],
  modules: {
    user,
  },
  // state: {},
  mutations: {
    reset(state) {
      Object.keys(state).forEach((key) => {
        Object.assign(state[key], initState[key]);
      });
    },
  },
  actions: {
    backToInitState({
      commit,
    }) {
      commit('reset');
      return true;
    },
  },
});
