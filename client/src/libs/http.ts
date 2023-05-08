import axios from 'axios';
import {
    Storage
} from './utils';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

axios.interceptors.request.use((config) => {
    const accessToken = Storage.get('user_token');
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${ accessToken }`;
    }
    console.log(config, 99);
    return config;
}, err => Promise.reject(err));


axios.interceptors.response.use(response => {
    console.log(response);
    return response.data
}, err => Promise.reject(err));

export default axios;