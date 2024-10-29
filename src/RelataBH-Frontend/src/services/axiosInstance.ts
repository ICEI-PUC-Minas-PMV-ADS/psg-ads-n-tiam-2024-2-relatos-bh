import axios from "axios";

const api = axios.create({
    baseURL: 'https://relatabh.azurewebsites.net/',
    headers: {"Content-Type": "application/json"}
});

api.interceptors.request.use(
    (config) => {
        console.log('Request:', {
            url: config.url,
            method: config.method,
            headers: config.headers,
            data: config.data,
            params: config.params,
        });
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response) => {
        // console.log('Interceptor called');
        // console.log('response:', {
        //     url: response.config.url,
        //     method: response.config.method,
        //     headers: response.config.headers,
        //     data: response.config.data,
        //     params: response.config.params,
        // });
        return response;
    },
    (error) => {
        console.error('Response error:', error.response.data);
        return Promise.reject(error);
    }
)

export default api;