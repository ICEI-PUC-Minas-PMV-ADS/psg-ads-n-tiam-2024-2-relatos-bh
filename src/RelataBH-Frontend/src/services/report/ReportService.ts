import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../axiosInstance";
import { ENDPOINTS } from "../Endpoints";

export class ReportService {
    private static readonly cachedCategories: string = "categories_key"

    static fetchByCoordinates = async (lat: number | undefined, long: number | undefined): Promise<ApiResponse<UserReport[]>> => {
        try {
            if (lat != undefined && long != undefined) {
                 let url = ENDPOINTS.REPORTS_BY_COORDINATES(lat, long);
                 const response = await api.get<UserReport[]>(url);
                 return { success: true, data: response.data };
             } else {
                 console.log("undefined lat/long");
                throw new Error("undefined lat/long");
             }
        } catch (error) {
            return { success: false, error: error instanceof Error ? error?.message : 'Unknown error' };
        }
    }

    static fetchByCategorie = async (categorieId: number, lat: number, long: number): Promise<ApiResponse<UserReport[]>> => {
        try {
            let url = ENDPOINTS.REPORTS_BY_COORDINATES(lat, long);
            const response = await api.get<UserReport[]>(url);
            return { success: true, data: response.data };
        } catch (error) {
            return { success: false, error: error instanceof Error ? error?.message : 'Unknown error' };
        }
    }

    static fetchCategories = async (): Promise<ApiResponse<ReportCategory[]>> => {
        try {
            let categories = await AsyncStorage.getItem(this.cachedCategories)

            if(categories != null){
                return { success: true, data: JSON.parse(categories) };
            } else {
                let url = ENDPOINTS.REPORT_CATEGORIES();
                const response = await api.get<ReportCategory[]>(url);
                AsyncStorage.setItem(this.cachedCategories, JSON.stringify(response.data))
                return { success: true, data: response.data };
            }
        } catch (error) {
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
    }

    static fetchReportByCityId = async (cityId: number): Promise<ApiResponse<UserReport[]>> => {
        try {
            let url = ENDPOINTS.REPORT_BY_CITY_ID(cityId);
            const response = await api.get<UserReport[]>(url);
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error instanceof Error ? error?.message : 'Unknown error' };
        }
    }
}

    static fetchReportByCityId = async (cityId: number): Promise<ApiResponse<UserReport[]>> => {
            let url = ENDPOINTS.REPORT_BY_CITY_ID(cityId);
            const response = await api.get<UserReport[]>(url);
            return { success: true, data: response.data }
        }
    }
}
