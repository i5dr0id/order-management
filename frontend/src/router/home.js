const Home = () => import('@/views/Home');

export default {
  path: '/',
  name: 'home',
  component: Home,
  meta: {
    rule: '*',
  },
};
