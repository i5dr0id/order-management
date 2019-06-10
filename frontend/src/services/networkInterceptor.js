import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { envUrls } from '@/utils/configs';
// import store from '../store';
// import store from '@/store';
// console.log("NET STORE: ", store)

Vue.use(VueAxios, axios);

// const token = store.getters['user/getUserToken'];
// const token = mapState('user', ['token']);
// const token = localStorage.getItem('__token');

// console.log('NAHHHHHH');


const BASE_URL = envUrls.development;

const headers = new Headers();
headers.append('Content-Type', 'application/json; charset=utf-8');

// if (token) {
//   console.log('GOING WITH A TOKEN');
//   headers.Authorization = `${token}`;
// }


const AxiosOrderMgt = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 5000,
  headers,
});

// console.log({AxiosOrderMgt})

AxiosOrderMgt.interceptors.request.use(
  (config) => {
    let token
    if ((token = localStorage.getItem('__token'))) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  err => Promise.reject(err),
);

export default AxiosOrderMgt;
