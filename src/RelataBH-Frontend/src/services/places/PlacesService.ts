import axiosInstance from "../axiosInstance";
import { ENDPOINTS } from "../Endpoints";

export class PlaceService {
    static searchPlaces = async (query: string): Promise<ApiResponse<Place[]>> => {
        try {
            let endpoint = ENDPOINTS.SEARCH_PLACES(query)
            const response = await axiosInstance.get<Place[]>(endpoint);
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
    }
}