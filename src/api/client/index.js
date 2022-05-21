import axios from 'axios';
const httpRequest = axios.create({
  baseURL: 'https://josevallejo.zya.me/wp-json/wp/v2/',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',

  },
});

export default httpRequest;