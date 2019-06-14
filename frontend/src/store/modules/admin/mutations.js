export default {
  SAVE_TOKEN: (state, payload) => {
    state.isAdminLoggedIn = true;
    state.adminToken = payload;
  },

  SAVE_ADMIN_DETAILS: (state, payload) => {
    state.currentAdmin = payload;
  },
};
