import axios from 'axios';

const baseURL: string = 'https://api.coingecko.com/api/v3/' || '';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 300000,
});
