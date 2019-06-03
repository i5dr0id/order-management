import AxiosOrderMgt from '../networkInterceptor';

import {
  HTTP_VERBS,
  CUSTOMER_LOGIN,
  CUSTOMER_REGISTER,
} from '@/utils/constants';

export default {

  async loginCustomerAccount(payload, type = HTTP_VERBS.POST, url = CUSTOMER_LOGIN) {
    const res = await AxiosOrderMgt[type](url, payload);
    return {
      status: res.status,
      data: res.data,
    };
  },

  async createCustomerAccount(payload, type = HTTP_VERBS.POST, url = CUSTOMER_REGISTER) {
    const res = await AxiosOrderMgt[type](url, payload);
    return {
      status: res.status,
      data: res.data,
    };
  },
};
