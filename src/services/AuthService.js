import axios from "axios";
import { BASE_URL } from "./homeservice";

export const loginUser = (data) => {
  return axios.post(`${BASE_URL}/auth/login`, data);
};
export const registerUser = (data)=>{
 return axios.post(`${BASE_URL}/auth/register`,data);
}