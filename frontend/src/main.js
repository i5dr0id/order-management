import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// console.log({store})

Vue.config.productionTip = false;

Vue.filter('format_currency', (value) => {
  if (!value) return '';
  value = Number(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return value;
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
