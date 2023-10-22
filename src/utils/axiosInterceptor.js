import axios from 'axios';
import {router} from '../main'

// Create an Axios instance with a base URL if needed
const instance = axios.create({
  baseURL: 'https://healthy-zeta.vercel.app/', // Replace with your API's base URL
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    console.log('Response data:', response.data);
    return response;
  },
  (error) => {
    // For example, show a notification, log the error, or redirect the user
    if (error.response) {
      console.error('Response error status:', error.response.status);
      console.error('Response error data:', error.response.data);
      router.push('/login'); // Redirect to the login page in case of response error
      return Promise.reject(error);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request error:', error.request);
      router.push('/login'); // Redirect to the default route in case of request error
    } else {
      // Something happened in setting up the request
      console.error('Request setup error:', error.message);
      router.push('/login'); // Redirect to the default route for other errors
    }

    return Promise.reject(error);
  }
);

export default instance;
