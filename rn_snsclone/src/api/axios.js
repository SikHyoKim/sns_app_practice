import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.180.90.124:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
