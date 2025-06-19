import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Update this if your backend is hosted elsewhere
});

export default axiosInstance;