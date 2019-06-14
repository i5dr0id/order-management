import AuthApi from '@/services/api/authenticate';

export default {
  ASYNC_CREATE_ADMIN_ACCOUNT: ({
    commit,
  }, payload) => AuthApi.createCustomerAccount(payload)
    .then(({
      status,
      data,
    }) => {
      if (status === 200) {
        saveAdminData(commit, data);
        return true;
      }
    }).catch((error) => {
      console.log('Error creating user account: ', error);
      return 'Error creating user account';
    }),

  ASYNC_LOGIN_ADMIN_ACCOUNT: ({ commit }, payload) => AuthApi.loginAdminAccount(payload)
    .then(({ status, data }) => {
      if (status === 200) {
        saveAdminData(commit, data);
        return true;
      }
    }),

  ASYNC_LOGOUT_ADMIN_ACCOUNT: ({
    dispatch,
  }) => new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('__token_admin');
      dispatch('backToInitState', '', {
        root: true,
      });
      return resolve('success');
    } catch (e) {
      return reject(new Error(e));
    }
  }),
};

const saveAdminData = async (commit, { user }) => {
  await localStorage.setItem('__token_admin', user.token);
  await commit('SAVE_TOKEN', user.token);
  await commit('SAVE_ADMIN_DETAILS', user);
};
