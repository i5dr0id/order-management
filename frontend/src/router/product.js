const Product = () => import('@/views/Product');

export default {
  path: '/products',
  component: Product,
  meta: {
    rule: '*',
  },
};
