import axios from 'axios';
const httpRequest = axios.create({
  baseURL: 'http://josevallejo.zya.me/wp-json/wp/v2/',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',

  },
});
export default httpRequest;