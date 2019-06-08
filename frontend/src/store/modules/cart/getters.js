export default {
  numberOfCartItems: state => state.currentCart.length,
  numberOfQuantity: (state) => {
    let quantity = 0;
    state.currentCart.forEach((item) => {
      quantity += item.quantity;
    });

    return quantity;
  },
  productsInCart: state => state.currentCart,
  cartTotalPrice: (state) => {
    let total = 0;
    state.currentCart.forEach((item) => {
      total += (item.price * item.quantity);
    });
    console.log('TOTAL::: ', total);
    return total;
  },
};
