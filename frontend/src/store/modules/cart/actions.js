// import cartService from '@/services/api/cart'

export default {

  asyncGetCart: () => {
    // cartService.getCart().then(res => {
    //   console.log('####################')
    //   console.log({
    //     res
    //   })
    //   console.log('####################')
    // })
  },
  asyncPushToCart: ({
    commit,
    state,
    rootState,
  }, item) => {
    console.log('commiting mutation');
    commit('pushToCart', item);
    if (rootState.user.token) {
      // cartService.addToCart(state.currentCart)
      //   .then(res => {
      //     commit('updateCart', res.data)
      //   })
    }
  },

  asyncIncreaseQty: ({
    commit,
    state,
    rootState,
  }, item) => {
    commit('increase', item);
    if (rootState.user.token) {
      // cartService.addToCart(state.currentCart)
      //   .then(res => {
      //     commit('updateCart', res.data)
      //   })
    }
  },

  asyncDecreaseQty: ({
    commit,
    state,
    rootState,
  }, item) => {
    commit('decrease', item);
    if (rootState.user.token) {
      // cartService.addToCart(state.currentCart)
      //   .then(res => {
      //     commit('updateCart', res.data)
      //   })
    }
  },

  asyncRemoveItem: ({
    commit,
    state,
    rootState,
  }, {
    item,
    index,
  }) => {
    commit('removeItem', index);
    // if (rootState.user.token) {
    //   console.log(index, [item])
    //   cartService.deleteFromCart([item])
    //   // cartService.addToCart(state.currentCart)
    // }
  },

};
