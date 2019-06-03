import AuthApi from '@/services/api/authenticate';

export default {
  ASYNC_CREATE_CUSTOMER_ACCOUNT: ({
    commit,
  }, payload) => AuthApi.createCustomerAccount(payload)
    .then(({
      status,
      res,
    }) => {
      console.log({
        status,
      });
      console.log({
        res,
      });
      if (status === 200) {
        console.log('YAS: ', res);
      }
    }).catch((error) => {
      console.log('Error creating user account: ', error);
      return 'Error creating user account';
    }),
};
