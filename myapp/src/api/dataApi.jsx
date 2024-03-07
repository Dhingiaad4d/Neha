import axiosInstance from "./axios";

export const getdata = async () => {
    const response = await axiosInstance.get(`/employees`);
    console.log({response})
    return response.data
}
export const getUserData = async () => {
    const response = await axiosInstance.get(`/users`)
    return response.data
}
// export const get_img_data = async () => {
//     const response = await axiosInstance1.get(`/photos?_limit=50`);
//     return response
// }

export const createUserData = async (data) => {
    const response = await axiosInstance.post(`/users`, data)
    return response
}
export const createData = async (data) => {
    const response = await axiosInstance.post(`/employees`, data)
    return response
}
export const getDatabyId = async (id) => {
    const response = await axiosInstance.get(`/employees/${id}`)
    return response
}
export const updateData = async (id, data) => {
    const response = await axiosInstance.put(`/employees/${id}`, data)
    return response
}
export const deletedata = async (id) => {
    const response = await axiosInstance.delete(`/employees/${id}`)
    return response
}
// export const loginApi = async (data) => {
//     const response = await axiosInstance2.post(`/login`, data)
//     return response
// }