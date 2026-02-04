import axios from "axios";

export const BASE_URL = "http://localhost:8080/api";


export const getHomeProducts = () => {
  return axios.get(`${BASE_URL}/home/products`);
};

export const fetchCategories = () => {
  return axios.get(`${BASE_URL}/categories`);
};

export const fetchSubCategoriesByCategory = (id) =>
  axios.get(`${BASE_URL}/subcategories/category/${id}`);

export const addCategory = (data) =>
  axios.post(`${BASE_URL}/categories`, data);

export const addSubCategory = (data) =>
   axios.post(`${BASE_URL}/subcategories`, data);

