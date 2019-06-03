import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { envUrls } from '@/utils/configs';
// import {store} from '../store';

Vue.use(VueAxios, axios);
import store from '@/store';

// const token = store.getters['user/getUserToken'];
// const token = mapState('user', ['token']);
// const token = localStorage.getItem('__token')

console.log({store})


const BASE_URL = envUrls.development;

const headers = new Headers();
headers.append('Content-Type', 'application/json; charset=utf-8');

// if (token) {
//   headers.Authorization = `Bearer ${token}`;
// }

const AxiosOrderMgt = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 5000,
  headers,
});

export default AxiosOrderMgt;

