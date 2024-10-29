import axiosInstance from "../axiosInstance";

export class PlacesService {
    search = async (query: string) => {
        try {
            const response = await axiosInstance.get(`api/Location/search?query=${query}`)
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}