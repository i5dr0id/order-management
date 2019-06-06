import ProductApi from '@/services/api/products';

export default {
  ASYNC_GET_ALL_PRODUCTS: ({
    commit,
  }) => ProductApi.getAllProducts()
    .then(({
      status,
      data,
    }) => {
      if (status === 200) {
        return data;
      }
    }).catch((error) => {
      console.log('Error fetching products: ', error);
      // return 'Error creating user account';
    }),


};
