import AxiosOrderMgt from '../networkInterceptor';

import {
  HTTP_VERBS,
  CREATE_CUSTOMER_ORDER,
  GET_CUSTOMER_ORDERS,
} from '@/utils/constants';

export default {
  async createCustomerOrder(payload, type = HTTP_VERBS.POST, url = CREATE_CUSTOMER_ORDER) {
    const res = await AxiosOrderMgt[type](url, payload);
    return {
      status: res.status,
      data: res.data,
    };
  },

  async getCustomerOrders(type = HTTP_VERBS.GET, url = GET_CUSTOMER_ORDERS) {
    const res = await AxiosOrderMgt[type](url);
    return {
      status: res.status,
      data: res.data,
    };
  },
};
