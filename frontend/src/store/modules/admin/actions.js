import AuthApi from '@/services/api/authenticate';
//
export default {
  ASYNC_CREATE_ADMIN_ACCOUNT: ({
    commit,
  }, payload) => AuthApi.createAdminAccount(payload)
    .then(({
      status,
      data,
    }) => {
      if (status === 200) {
        saveAdminData(commit, data);
        return 200;
      }
    }).catch(error => {
      return error
    }),

  ASYNC_LOGIN_ADMIN_ACCOUNT: ({
    commit,
  }, payload) => AuthApi.loginAdminAccount(payload)
    .then(({
      status,
      data,
    }) => {
      if (status === 200) {
        saveAdminData(commit, data);
        return 200;
      }
    }).catch((err) => err),

  ASYNC_LOGOUT_ADMIN_ACCOUNT: ({
    dispatch,
  }) => new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('__order_mgt');
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

const saveAdminData = async (commit, {
  admin,
}) => {
  await localStorage.setItem('__token_admin', admin.token);
  await commit('SAVE_TOKEN', admin.token);
  await commit('SAVE_ADMIN_DETAILS', admin);
};
