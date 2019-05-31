// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue');

export default {
  path: '/',
  name: 'about',
  component: About,
  meta: {
    rule: '*',
  },
};
