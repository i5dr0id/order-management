import AuthApi from '@/services/api/authenticate';

export default {
  ASYNC_CREATE_CUSTOMER_ACCOUNT: ({
    commit,
  }, payload) => AuthApi.createCustomerAccount(payload)
    .then(({
      status,
      data,
    }) => {
      if (status === 200) {
        saveCustomerData(commit, data);
        return true;
      }
    }).catch((error) => {
      console.log('Error creating user account: ', error);
      return 'Error creating user account';
    }),

  ASYNC_LOGIN_CUSTOMER_ACCOUNT: ({ commit }, payload) => AuthApi.loginCustomerAccount(payload)
    .then(({ status, data }) => {
      if (status === 200) {
        saveCustomerData(commit, data);
        return true;
      }
    }),

  ASYNC_LOGOUT_CUSTOMER_ACCOUNT: ({
    dispatch,
  }) => new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('__order_mgt');
      localStorage.removeItem('__token');
      dispatch('backToInitState', '', {
        root: true,
      });
      return resolve('success');
    } catch (e) {
      return reject(new Error(e));
    }
  }),
};

const saveCustomerData = async (commit, { customer }) => {
  await localStorage.setItem('__token', customer.token);
  await commit('SAVE_TOKEN', customer.token);
  await commit('SAVE_USER_DETAILS', customer);
};
