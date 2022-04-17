import axios from 'axios';

import { config } from '../config';

const url = config.API_URL;

export const login = async (data) => {
  try {
    const response = await axios.post(`${url}/auth`, data);

    return response.data;
  } catch (e) {
    alert(JSON.stringify(e.response.data, null, 2));
  }
}
