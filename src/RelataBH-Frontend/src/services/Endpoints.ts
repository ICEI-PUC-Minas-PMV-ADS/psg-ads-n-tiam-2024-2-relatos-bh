export const ENDPOINTS = {
    LOGIN: () => BASE_URL + "api/auth/login",
    RECOVER_PASSWORD: () => BASE_URL + "api/auth/recoverPassword",
    REGISTER: () => BASE_URL + "api/auth/register",

    SEARCH_PLACES: (query: string) => BASE_URL + `api/Location/search?query=${query}`,
    
    SEARCH_BY_CENTRAL_POINT: (lat: number, long: number) => BASE_URL + `api/Relato/searchByCentralPoint?lat=${lat}&log=${long}`,
    REPORT_CATEGORIES: () => BASE_URL + `api/RelatoCategory/categories`,
    GET_PROFILE_INFOS: () => BASE_URL + `api/user/profile`,
    CREATE_RELATO: () => BASE_URL + `api/Relato`,
    REPORT_BY_CITY_ID: (cityId: number) => BASE_URL + `api/Relato/searchByCidade?id=${cityId}`,
    REPORTS_BY_USER: (userId: number) => BASE_URL + `api/user/historic?userId=${userId}`,
    
    //caminho para os outros endpoints ficarao aqui 
}
const BASE_URL = "https://relatabh.azurewebsites.net/"