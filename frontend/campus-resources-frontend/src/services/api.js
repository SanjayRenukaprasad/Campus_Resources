import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const getCategories = () =>
  axios.get(`${API_BASE_URL}/categories/`);

export const getResourcesByCategory = (categoryId) =>
  axios.get(`${API_BASE_URL}/resources/`, {
    params: { category_id: categoryId }
  });
