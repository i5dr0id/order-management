const Admin = () => import('@/views/Admin');

export default {
  path: '/admin',
  name: 'admin',
  component: Admin,
  meta: {
    rule: '*',
  },
};
