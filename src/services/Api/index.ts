import { LS_TOKEN } from '@services/LocalStorage';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(LS_TOKEN)}`,
  },
});

export default api;
