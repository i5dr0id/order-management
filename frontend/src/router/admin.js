const AdminBase = () => import('@/views/AdminBase');
const AdminLogin = () => import('@/views/AdminLogin');
const AdminRegister = () => import('@/views/AdminRegister');

export default {
  path: '/admin',
  component: AdminBase,
  children: [{
    path: '/admin',
    name: 'adminlogin',
    component: AdminLogin,
  },
  {
    path: 'register',
    name: 'adminregister',
    component: AdminRegister,
  },
  ],
  meta: {
    rule: '*',
  },
};
