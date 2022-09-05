import apiClient from "../../utils/apiClient";

export async function  getUsers (pageNumber, limit) { 
    const response = await apiClient.get('user',{params: {page: pageNumber - 1 , limit: limit}}); 
    return response.data;
}