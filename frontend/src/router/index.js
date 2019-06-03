import Vue from 'vue';
import Router from 'vue-router';
import auth from './auth';
import about from './about';
import error from './error';

import product from './product';

const AppBase = () => import('@/views/AppBase');


Vue.use(Router);

export default new Router({
  routes: [
    auth,
    about,
    error,
    {
      path: '/app',
      component: AppBase,
      children: [product],
    },
  ],
});
