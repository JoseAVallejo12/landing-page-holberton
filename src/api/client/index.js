import axios from 'axios';
const httpRequest = axios.create({
  baseURL: 'http://josevallejo.zya.me/wp-json/wp/v2/',
  timeout: 3000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default httpRequest;