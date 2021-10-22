import axios from '../plugins/axios';

import API_ENV from '../config/api.config';

/**
 * Function login. Make login request to API
 * @param {String} email
 * @param {String} password
 */
export async function login(email: string, password: string) {
  try {
    const response = await axios.post(
      `${API_ENV.apiUrl}/auth/login`,
      JSON.stringify({ email, password })
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
