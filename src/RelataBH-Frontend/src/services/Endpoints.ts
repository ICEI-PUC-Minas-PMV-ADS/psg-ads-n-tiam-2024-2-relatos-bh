export const ENDPOINTS = {
    LOGIN: () => BASE_URL + "api/auth/login",
    RECOVER_PASSWORD: () => BASE_URL + "api/auth/recoverPassword",
    REGISTER: () => BASE_URL + "api/auth/register",
    ESQUECI_SENHA: () => BASE_URL + "api/auth/recoverPassword",
    SEARCH_PLACES: (query: string) => BASE_URL + `api/Location/search?query=${query}`,
    REPORTS_BY_COORDINATES: (lat: number, long: number) => BASE_URL + `api/Relato/searchByCoordinates?lat=${lat}&log=${long}`,
    REPORT_CATEGORIES: () => BASE_URL + `api/RelatoCategory/categories`,
    GET_PROFILE_INFOS: () => BASE_URL + `api/user/profile`,
    REPORT_BY_CITY_ID: (cityId: number) => BASE_URL + `api/Relato?cityId=${cityId}`,
    //caminho para os outros endpoints ficarao aqui 
}
const BASE_URL = "https://relatabh.azurewebsites.net/"