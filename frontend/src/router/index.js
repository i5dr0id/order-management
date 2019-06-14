import Vue from 'vue';
import Router from 'vue-router';
import auth from './auth';
import about from './about';
import error from './error';

import products from './products';
import admin from './admin';

const AppBase = () => import('@/views/AppBase');


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    auth,
    about,
    error,
    products,
    admin,
    // {
    //   path: '/app',
    //   component: AppBase,
    //   children: [product],
    // },
  ],
});
