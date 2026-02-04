import { BASE_URL } from "./homeservice";
import axios from "axios";


export const PRODUCT_URL=`${BASE_URL}/products`;

export const addProduct = (data) =>
    axios.post(`${PRODUCT_URL}`, data);

export const uploadImage = (formData, id) => {
    return axios.post(`${PRODUCT_URL}/upload-images/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" }, })
}
export const productsBySubCategoryId=(id)=>{
    return axios.get(`${PRODUCT_URL}/subcategory/${id}`);
}

export const loadProduct=(id)=>{
    return axios.get(`${PRODUCT_URL}/product/${id}`);
}