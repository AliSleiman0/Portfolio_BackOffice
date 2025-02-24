import axios from 'axios';

const API_URL = 'https://portfolioapi-g2ephnghhzfsgdcj.canadacentral-01.azurewebsites.net/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Pragma: 'no-cache',
    'Cache-control': 'no-cache',
    timeout: 20000,
  },
});
export default api;
