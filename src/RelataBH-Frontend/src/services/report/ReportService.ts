import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../axiosInstance";
import { ENDPOINTS } from "../Endpoints";

export class ReportService {
    private static readonly cachedCategories: string = "categories_key"

    static fetchInRange = async (lat: number | undefined, long: number | undefined): Promise<ApiResponse<UserReport[]>> => {
        try {
            // if (lat != undefined && long != undefined) {
            //     let url = ENDPOINTS.REPORTS_IN_RANGE(lat, long);
            //     const response = await api.get<UserReport[]>(url);
            //     return { success: true, data: response.data };
            // } else {
            //     console.log("undefined lat/long");
                throw new Error("undefined lat/long");
            // }
        } catch (error) {
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
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
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
    }
}

const createReportMock = (): UserReport[] => {
    return [
        {
            name: "Buraco na rua",
            description: "Faz meses que esse buraco está incomodando a vizinhança!",
            address: "Rua Walter Ianni, 255 - São Gabriel",
            lat: -19.8157,
            long: -43.9542,
            photos: ["https://picsum.photos/700", "https://picsum.photos/700", "https://picsum.photos/700", "https://picsum.photos/700", "https://picsum.photos/700"],
            type: "buraco",
            likeNumber: 10,
            createdAt: Date.now()
        } as UserReport,

        {
            name: "Problema 2",
            description: "Descrição 2",
            address: "Endereço 2",
            lat: 49,
            long: 12,
            photos: ["", ""],
            type: "buraco",
            likeNumber: 10,
            createdAt: Date.now()
        } as UserReport,

        {
            name: "Problema 3",
            description: "Descrição 3",
            address: "Endereço 3",
            lat: 21,
            long: 12,
            photos: ["", ""],
            type: "buraco",
            likeNumber: 10,
            createdAt: Date.now()
        } as UserReport,
    ]
}