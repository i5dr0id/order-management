// import cartService from '@/services/api/cart'

export default {

  asyncPushToCart: ({
    commit,
  }, item) => {
    commit('pushToCart', item);
  },

  asyncIncreaseQty: ({
    commit,
  }, item) => {
    commit('increase', item);
  },

  asyncDecreaseQty: ({
    commit,
  }, item) => {
    commit('decrease', item);
  },
  asynClearCart: ({
    commit,
  }) => {
    commit('clearCart');
  },
  asyncRemoveItem: ({
    commit,

  }, {
    index,
  }) => {
    commit('removeItem', index);
  },

};
