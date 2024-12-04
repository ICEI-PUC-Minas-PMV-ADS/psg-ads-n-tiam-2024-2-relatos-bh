import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../axiosInstance";
import { ENDPOINTS } from "../Endpoints";

export class ReportService {
    private static readonly cachedCategories: string = "categories_key"

    static saveRelato = async (relato: Relato) : Promise<ApiResponse<Boolean>> => {
        try {
            const formData = new FormData();
            formData.append('IdUser', '100');
            formData.append('Endereco', relato.Endereco);
            formData.append('Latitude', relato.Latitude);
            formData.append('DescricaoRelato', relato.DescricaoRelato);
            formData.append('Longitude', relato.Longitude);
            formData.append('IdCategoria', String(relato.IdCategoria));
            formData.append('Titulo', relato.Titulo);
            formData.append('NomeCidade', relato.NomeCidade);
            
            let url = ENDPOINTS.CREATE_RELATO();
            const response = await api.post(url, formData, { headers: {'Content-Type': 'multipart/form-data', 'accept': 'application/json'}});
            return { success: true, data: true }
        } catch (error) {
            return { success: false, error: "Error saving relato" }
        }
    }

    static fetchByCoordinates = async (lat: number | undefined, long: number | undefined): Promise<ApiResponse<UserReport[]>> => {
        try {
            if (lat != undefined && long != undefined) {
                 let url = ENDPOINTS.SEARCH_BY_CENTRAL_POINT(lat, long);
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
            let url = ENDPOINTS.SEARCH_BY_CENTRAL_POINT(lat, long);
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

