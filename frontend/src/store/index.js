import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import user from './modules/user';
import shared from './modules/shared';
import ui from './modules/ui';
import products from './modules/products';
import cart from './modules/cart';
import orders from './modules/orders';
import admin from './modules/admin';

const initState = {
  user: user.state,
  shared: shared.state,
  ui: ui.state,
  products: products.state,
  cart: cart.state,
  orders: orders.state,
  admin: admin.state,
};

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: '__order_mgt',
  storage: window.localStorage,
  modules: ['shared', 'user', 'ui', 'products', 'cart', 'admin'],
});

export default new Vuex.Store({
  // namespaced: true,
  plugins: [vuexPersist.plugin],
  modules: {
    user,
    products,
    cart,
    orders,
    admin,
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
