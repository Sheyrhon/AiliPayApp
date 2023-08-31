import axios from 'axios';
import { API_ENDPOINT } from '@env';
// Set default base URL
// axios.defaults.baseURL = 'https://airlipayapi-lj5jh6d6pa-ue.a.run.app';
// console.log('process', process.env.API_ENDPOINT);
axios.defaults.baseURL = 'http://172.20.10.3:3001';

// Set default headers
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
