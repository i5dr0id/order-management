export default {
  SAVE_TOKEN: (state, payload) => {
    state.isLoggedIn = true;
    state.userToken = payload;
  },

  SAVE_USER_DETAILS: (state, payload) => {
    state.currentUser = payload;
  },
};
