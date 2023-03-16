import axios from 'axios';
import Config from '../config/config';
import Utils from '../utils/utils';
import ApiEndpoint from '../config/api-endpoint';

const Transactions = {
  async getAll() {
    const getAll = await axios.get(ApiEndpoint.GET_STORY, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
    return getAll;
  },

  async getById(id) {
    const getById = await axios.get(ApiEndpoint.GET_STORY_BY_ID(id), {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
    return getById;
  },

  async store({ description, photo }) {
    const data = { description, photo };

    const store = await axios.post(ApiEndpoint.STORE_STORY, data, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return store;
  },

  async storeGuest({ description, photo }) {
    const data = { description, photo };

    const storeGuest = await axios.post(ApiEndpoint.STORE_STORY_GUEST, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return storeGuest;
  },
};

export default Transactions;
