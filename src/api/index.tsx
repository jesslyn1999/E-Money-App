import axios from 'axios';
import {config_env} from 'src/constant';

export const BACKEND_API_URL = config_env.BACKEND_API_URL;

export const getAxiosInstance = (baseUrl: string, authToken: string = '') =>
    axios.create({
        baseURL: baseUrl,
        timeout: 1000,
        headers: {Authorization: 'Bearer ' + authToken},
        withCredentials: true,
    });
