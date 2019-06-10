export default {
  pushToCart: (state, item) => {
    const product = findProduct(state.currentCart, item);
    if (!product) {
      state.currentCart.push(item);
    } else {
      product.quantity++;
      product.time_updated = Date.now();
    }
  },
  updateCart: (state, cart) => {
    state.currentCart = cart;
  },
  increase: (state, item) => {
    const product = findProduct(state.currentCart, item);
    product.quantity++;
    product.time_updated = Date.now();
  },

  decrease: (state, item) => {
    const product = findProduct(state.currentCart, item);
    product.quantity--;
    product.time_updated = Date.now();
  },

  removeItem: (state, index) => {
    // Using splice for now, not best practice though as this mutates the array.
    // Use "slice" instead when integrating with cookies and the backend.
    state.currentCart.splice(index, 1);
    // state.currentCart.slice(index, 1)
  },
};

const findProduct = (state, item) => state.find(product => product.id === item.id);
