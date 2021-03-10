import axios from 'axios';
import Config from '../../config/config';

const api = axios.create({
   baseURL: `${Config.APP_URL}:3333`,
});

export default api;
