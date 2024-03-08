import axiosInstance from "../api/axios";

export const loginApi = async (data) => {
    try {
        const response = await axiosInstance.post(`/login`, data)
        const token = response.data.token
        localStorage.setItem('token', token)
        return response
    }
    catch(error){
        console.log(error,"error message")
        throw error;
    }
}

