import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { TokenService } from "./TokenService";

const api = axios.create({
    baseURL: 'https://relatabh.azurewebsites.net/',
    headers: {"Content-Type": "application/json"}
});

api.interceptors.request.use(
    async (config) => {
        let userToken = await TokenService.getUserToken();
        if(userToken != null){
            config.headers.Authorization = `Bearer ${userToken}`
        }
        logRequest(config);
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response) => {
        logResponse(response);
        return response;
    },
    (error) => {
        console.error('Response error:', JSON.stringify(error));
        return Promise.reject(error);
    }
)

const logResponse = (response: AxiosResponse<any, any>) => {
    if(__DEV__){
        console.log('Response:', {
            a: JSON.stringify(response),
            statusCode: response.status,
            body: response.data,
        });
    }
}

const logRequest = (request: InternalAxiosRequestConfig<any>) => {
    if(__DEV__){
        console.log('Request:', {
            url: request.url,
            method: request.method,
            headers: request.headers,
            data: request.data,
            params: request.params,
        });
    }
}
export default api;