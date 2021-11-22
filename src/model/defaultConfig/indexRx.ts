import axios, { AxiosRequestConfig, AxiosError, AxiosPromise } from 'axios';
import { Sequelize } from 'base-core-lib-ts';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  timeout: process.env.AJAX_TIMEOUT as number | undefined,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // const token = storage.session.get('token');
    // if (token) {
    //   config.headers.token = token;
    // }
    return config;
  },
  (error: AxiosError): AxiosPromise => {
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

// 添加一个响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const appRx = new Sequelize({}, instance);
