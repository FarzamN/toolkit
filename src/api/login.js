import axios from 'axios';

export const login_api = axios.create({
  baseURL: 'https://dummyjson.com/',
});
