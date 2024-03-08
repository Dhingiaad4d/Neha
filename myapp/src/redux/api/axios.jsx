import axios from "axios";

export const baseurl ="https://dummyjson.com/auth/"
export const axiosInstance=axios.create({baseURL:baseurl})
export default axiosInstance;