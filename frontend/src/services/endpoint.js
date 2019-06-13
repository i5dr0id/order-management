// import Vue from 'vue';
import CustomerInstance from './networkInterceptor';

import {
  HTTP_VERBS,
  CUSTOMER_LOGIN,
  CUSTOMER_REGISTER,
} from '@/utils/constants';


export default {

  // AUTH
  async loginCustomerAccount(payload, type = HTTP_VERBS.POST, url = CUSTOMER_LOGIN) {
    const res = await CustomerInstance[type](url, payload);
    return {
      status: res.status,
      data: res.data,
    };
  },

  async createCustomerAccount(payload, type = HTTP_VERBS.POST, url = CUSTOMER_REGISTER) {
    const res = await CustomerInstance[type](url, payload);
    return {
      status: res.status,
      data: res.data,
    };
  },
};
