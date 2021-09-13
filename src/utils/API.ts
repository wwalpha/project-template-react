import Axios from 'axios';

Axios.defaults.baseURL = 'Environments.API_BASE_URL';

export const get = async <T = any>(path: string, headers?: any): Promise<T> =>
  await Axios.get(path, {
    headers,
  });

export const put = async <T = any>(path: string, body?: any): Promise<T> =>
  await Axios.put(path, {
    body,
  });

export const post = async <T = any>(path: string, body?: any): Promise<T> => await Axios.post(path, body);
