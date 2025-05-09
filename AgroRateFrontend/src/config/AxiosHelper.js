import axios from 'axios';

export const baseURL = 'http://localhost:8080/api';

export const httpClient = axios.create({
  baseURL: baseURL,
})