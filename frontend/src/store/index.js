import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import user from './modules/user';
import shared from './modules/shared';
import ui from './modules/ui';
import products from './modules/products';

const initState = {
  user: user.state,
  shared: shared.state,
  ui: ui.state,
  products: products.state,
};

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: '__order_mgt',
  storage: window.localStorage,
  modules: ['shared', 'user', 'ui', 'products'],
});

export default new Vuex.Store({
  // namespaced: true,
  plugins: [vuexPersist.plugin],
  modules: {
    user,
    products,
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
