import axios from 'axios';

const API_BASE_URL = "https://campus-resources.onrender.com/api";

export const getCategories = () =>
  axios.get(`${API_BASE_URL}/categories/`);

export const getResourcesByCategory = (categoryId) =>
  axios.get(`${API_BASE_URL}/resources/`, {
    params: { category_id: categoryId }
  });
