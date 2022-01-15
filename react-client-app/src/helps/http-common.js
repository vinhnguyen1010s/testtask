import axios from 'axios';

export const BASE_URL = 'http://localhost:8081/api';

export default axios.create({
  baseURL: BASE_URL,
  header: {
    'Content-Type': 'application/json',
  },
});
