import axios from "axios";
import api from "../axiosInstance";
import { ENDPOINTS } from "../Endpoints";
import { TokenService } from "../TokenService";

type LoginResponse = {
    idToken: string,
    refreshToken: string
}

export class AuthService {
    login = async (email: string, password: string): Promise<ApiResponse<LoginResponse>> => {
        try {
            const url = ENDPOINTS.LOGIN();
            const body = JSON.stringify({email: email, password: password, returnSecureToken: true});
            const response = await api.post<LoginResponse>(url, body);
            TokenService.saveUserToken(response.data.idToken);
            return { success: true, data: response.data }
        } catch (error) {
            if(axios.isAxiosError(error)){
                console.log("ERROR> " + error.response?.data.error.message)
                return { success: false, error: error.response?.data.error.message };
            }
            
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
    }

    register = async (
        name:string, 
        email: string, 
        password: string, 
        confirmarPassword: string
    ): Promise<ApiResponse<LoginResponse>> => {
        const url = ENDPOINTS.REGISTER();
        const body = JSON.stringify({
            name:name, 
            email: email, 
            password: password, 
            confirmarPassword: confirmarPassword, 
            returnSecureToken: true
        });
        const response = (await api.post(url, body)).data
        TokenService.saveUserToken(response.data.idToken);

        return { success: true, data: response.data };
    }

    recoverPassword = async () => {}
}