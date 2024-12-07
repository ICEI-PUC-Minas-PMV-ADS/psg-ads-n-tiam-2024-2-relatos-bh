import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../axiosInstance";
import { ENDPOINTS } from "../Endpoints";


export class ReportService {
    private static readonly cachedCategories: string = "categories_key";

    static getExtensionFromBlob = (blob: Blob): string => {
        const mimeType: string = blob.type;  // e.g., "image/jpeg", "application/pdf", etc.
        
        // Mapping MIME types to file extensions
        const mimeTypes: { [key: string]: string } = {
          "image/jpeg": "jpeg",
          "image/png": "png",
          "image/gif": "gif",
          "image/webp": "webp",
          "application/pdf": "pdf",
          "application/msword": "doc",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
          "application/vnd.ms-excel": "xls",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
          "application/zip": "zip",
          "audio/mpeg": "mp3",
          "audio/wav": "wav",
          "video/mp4": "mp4",
          // Add more mappings as needed
        };
      
        // Return the file extension corresponding to the MIME type, or "unknown" if not found
        console.log(mimeTypes[mimeType]);
        return mimeTypes[mimeType] || "unknown";
      };

    static saveRelato = async (relato: Relato): Promise<ApiResponse<Boolean>> => {
        try {
            console.log(JSON.stringify(relato));
            const formData = new FormData();
            formData.append('IdUser', '100');
            formData.append('Endereco', relato.Endereco);
            formData.append('Latitude', relato.Latitude);
            formData.append('DescricaoRelato', relato.DescricaoRelato);
            formData.append('Longitude', relato.Longitude);
            formData.append('IdCategoria', String(relato.IdCategoria));
            formData.append('Titulo', relato.Titulo);
            formData.append('NomeCidade', relato.NomeCidade);
    
            // This will hold the Blobs
    
            // Using a loop to handle the asynchronous image processing correctly
        //     for (let i = 0; i < 1; i++) {
        //         const image = relato.images[i];
        //         const response = await fetch(image);
        //         console.log(image);
        //         const imageBlob = await response.blob();
        //         formData.append(`images`, imageBlob, `image_${i}.${ReportService.getExtensionFromBlob(imageBlob)}`);
        //     }

        //     const image = {
        //         uri: relato.images[0],  // Replace with your image URI
        //         type: "image/jpeg",  // The MIME type of the image
        //         name: "image.jpg"  // The original file name
        //       };

        //       const imageFile = new File([relato.images[0]], `${Date.now()}.jpeg`, {
        //         type: "image/jpeg",
        //  });
        //     formData.append("images", imageFile);
    
            // Send the FormData with the images as a multipart request
            
            console.log(JSON.stringify(formData));
            let url = ENDPOINTS.CREATE_RELATO();
            const response = await api.post(url, formData, {
                headers: { 'Content-Type': 'multipart/form-data', 'accept': 'application/json' },
            });
    
            AsyncStorage.setItem("should_refresh_profile", JSON.stringify(response.status == 200));
    
            return { success: true, data: true };
        } catch (error) {
            return { success: false, error: "Error saving relato" };
        }
    };

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

