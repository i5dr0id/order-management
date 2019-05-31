const Auth = () => import('@/views/Auth');

export default {
  path: '/',
  name: 'home',
  component: Auth,
  meta: {
    rule: '*',
  },
};
