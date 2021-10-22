import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const lsTokenKey = 'my_app_token';

function setTockenOnLogin(res: AxiosResponse<any>) {
  const isLoginUrl = res.config.url?.includes('login');

  if (isLoginUrl) {
    const token = res.data.token;
    localStorage.setItem(lsTokenKey, token);
  }

  return res;
}

function getClearResponse(res: AxiosResponse<any>) {
  return res.data;
}

function setToken(reqConfig: AxiosRequestConfig) {
  const isAuthUrl = reqConfig.url?.includes('auth');

  if (!isAuthUrl) {
    const token = localStorage.getItem(lsTokenKey);
    reqConfig.headers['x-access-token'] = token;
  }

  return reqConfig;
}

function onError(err: AxiosError) {
  console.dir(err);
  return Promise.reject(err);
}

export default function (axios: AxiosInstance) {
  axios.interceptors.response.use(setTockenOnLogin);
  axios.interceptors.response.use(getClearResponse, onError);
  axios.interceptors.request.use(setToken);
}
