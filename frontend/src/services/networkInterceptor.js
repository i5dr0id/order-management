import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  envUrls,
} from '@/utils/configs';
// import store from '../store';
// import store from '@/store';
// console.log("NET STORE: ", store)

Vue.use(VueAxios, axios);

const BASE_URL = envUrls.development;

const headers = new Headers();
headers.append('Content-Type', 'application/json; charset=utf-8');


const CustomerInstance = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 5000,
  headers,
});

const AdminInstance = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 5000,
  headers,
});


CustomerInstance.interceptors.request.use(
  (config) => {
    let token;
    if ((token = localStorage.getItem('__token_customer'))) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  err => Promise.reject(err),
);

AdminInstance.interceptors.request.use(
  (config) => {
    let token;
    if ((token = localStorage.getItem('__token_admin'))) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  err => Promise.reject(err),
);

export {
  CustomerInstance,
  AdminInstance,
};
