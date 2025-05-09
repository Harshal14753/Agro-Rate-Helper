import {httpClient} from '../config/AxiosHelper.js';

export const saveUser = async (formData) => {
    console.log("2")
    const response = await httpClient.post(`/saveUser`,formData);
    console.log("6")
    console.log(response.data)
    return response.data;
}

export const getUserData = async (uuid) => {
    try {
        const response = await httpClient.get(`/api/getUser/${uuid}`);
        console.log(response)
        console.log(response.data)
        return response.data; // Return only the data, not the full response object
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Handle errors properly
    }
} 