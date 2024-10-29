export const ENDPOINTS = {
    LOGIN: () => BASE_URL + "api/auth/login",
    REGISTER: () => BASE_URL + "api/auth/register",
    SEARCH_PLACES: (query: string) => BASE_URL + `api/Location&query=${query}`
    //caminho para os outros endpoints ficarao aqui 
}
const BASE_URL = "https://relatabh.azurewebsites.net/"