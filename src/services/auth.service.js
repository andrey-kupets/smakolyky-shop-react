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
};

export const register = async (data) => {
  try {
    const response = await axios.post(`${url}/users`, data);

    return response.data;
  } catch (e) {
    alert(JSON.stringify(e.response.data, null, 2));
  }
};

export const confirmEmail = async (token) => {
  try {
    const response = await axios.post(`${url}/users/confirm`, {}, {
        headers: {
          'Authorization': token
        }
      }
    );

    return response.data;
  } catch (e) {
    alert(JSON.stringify(e.response.data, null, 2));
  }
};
