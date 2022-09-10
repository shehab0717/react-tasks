import apiClient from "../../utils/apiClient";

export async function  getUsers (pageNumber, limit) { 
    const response = await apiClient.get('user',{params: {page: pageNumber - 1 , limit: limit}}); 
    return response.data;
}

export async function  getUser (userId) { 
    const response = await apiClient.get(`user/${userId}`); 
    return response.data;
}

export async function createNewUser(userData){
    const response = await apiClient.post('/user/create',userData);
    return response;
}
