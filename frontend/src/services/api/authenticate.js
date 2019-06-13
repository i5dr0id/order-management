import { CustomerInstance, AdminInstance } from '../networkInterceptor';


import {
  HTTP_VERBS,
  CUSTOMER_LOGIN,
  CUSTOMER_REGISTER,
  ADMIN_LOGIN,
  ADMIN_REGISTER,
} from '@/utils/constants';

export default {

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

  async loginAdminAccount(payload, type = HTTP_VERBS.POST, url = ADMIN_LOGIN) {
    const res = await AdminInstance[type](url, payload);
    return {
      status: res.status,
      data: res.data,
    };
  },

  async createAdminAccount(payload, type = HTTP_VERBS.POST, url = ADMIN_REGISTER) {
    const res = await AdminInstance[type](url, payload);
    return {
      status: res.status,
      data: res.data,
    };
  },
};
