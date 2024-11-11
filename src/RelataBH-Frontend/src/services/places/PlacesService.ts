import axiosInstance from "../axiosInstance";
import { ENDPOINTS } from "../Endpoints";

export const SearchPlace = async (query: string) =>  {
        try {
            let endpoint = ENDPOINTS.SEARCH_PLACES(query)
            const response = await axiosInstance.get(endpoint)
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
}