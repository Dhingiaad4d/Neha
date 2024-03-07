import axios from "axios";
 const baseurl1 = "https://657c0cdc394ca9e4af154e13.mockapi.io";



export const  axiosInstance = axios.create({baseURL:baseurl1})
export default axiosInstance;


// import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: 'https://657c0cdc394ca9e4af154e13.mockapi.io',
// });

// export default axiosInstance;