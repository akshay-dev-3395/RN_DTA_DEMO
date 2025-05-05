import axios, {AxiosRequestConfig, AxiosError} from 'axios';
import {BASE_URL} from '@env';

export const getAxiosInstance = async () => {
  try {
  } catch (error) {
  } finally {
    const instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      timeout: 5000,
    });

    instance.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    instance.interceptors.response.use(
      response =>
        new Promise((resolve, reject) => {
          // console.log('AXIOS=====RES====', response);

          resolve(response);
        }),
      async error => {
        // console.log('AXIOS ERROR===', error.response.data);
        if (error.response) {
          return new Promise((resolve, reject) => {
            reject(error.response.data);
          });
        }
      },
    );

    return instance;
  }
};
