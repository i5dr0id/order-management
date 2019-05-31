const NotFound = () => import('@/views/Error');

export default {
  path: '/error',
  name: 'notfound',
  component: NotFound,
  meta: {
    rule: '*',
  },
};
