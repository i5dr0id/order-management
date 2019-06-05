const Products = () => import('@/views/Products');

export default {
  path: '/products',
  component: Products,
  meta: {
    rule: '*',
  },
};
