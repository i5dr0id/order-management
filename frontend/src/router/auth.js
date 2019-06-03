const Auth = () => import('@/views/Auth');
const Register = () => import('@/views/Register');
const HomeBase = () => import('@/views/HomeBase');

export default {
  path: '/',
  component: HomeBase,
  children: [
    {
      path: '/',
      name: 'login',
      component: Auth,
    },
    {
      path: 'register',
      name: 'register',
      component: Register,
    },
  ],
  meta: {
    rule: '*',
  },
};
