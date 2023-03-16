import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';

const Auth = {
  async register({ name, email, password }) {
    const register = await axios.post(ApiEndpoint.REGISTER, { name, email, password });
    return register;
  },

  async login({ email, password }) {
    const login = await axios.post(ApiEndpoint.LOGIN, { email, password });
    return login;
  },
};

export default Auth;
