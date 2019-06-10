import OrderApi from '@/services/api/orders';

export default {
  ASYNC_CREATE_CUSTOMER_ORDER: ({ commit, rootState }) => OrderApi.createCustomerOrder({ products: rootState.cart.currentCart })
    .then(({
      status,
      data,
    }) => {
      if (status === 200) {
        console.log({
          data,
        });
        return true;
      }
    }).catch((error) => {
      console.log('Error creating user account: ', error);
      return 'Error creating user account';
    }),


};
