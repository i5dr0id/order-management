import AxiosOrderMgt from '../networkInterceptor';

import {
  HTTP_VERBS,
  PRODUCTS,
} from '@/utils/constants';

export default {
  async getAllProducts(type = HTTP_VERBS.GET, url = PRODUCTS) {
    const res = await AxiosOrderMgt[type](url);
    return {
      status: res.status,
      data: res.data,
    };
  },
};
