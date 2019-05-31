import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
// import auth from './auth'
import auth from './auth';
import about from './about';
import error from './error';

Vue.use(Router);

export default new Router({
  routes: [
    auth,
    about,
    error,
  //   {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  // },
  ],
});
