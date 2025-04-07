// src/services/api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080', // Spring Boot backend
  headers: {
    'Content-Type': 'application/json',
  },
});
