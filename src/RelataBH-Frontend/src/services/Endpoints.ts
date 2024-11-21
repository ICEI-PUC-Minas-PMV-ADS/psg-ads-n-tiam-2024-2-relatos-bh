export const ENDPOINTS = {
    LOGIN: () => BASE_URL + "api/auth/login",
    RECOVER_PASSWORD: () => BASE_URL + "api/auth/recoverPassword",
    REGISTER: () => BASE_URL + "api/auth/register",
    SEARCH_PLACES: (query: string) => BASE_URL + `api/Location/search?query=${query}`,
    REPORTS_IN_RANGE: (lat: number, long: number) => BASE_URL + `api/Relato/search?lat=${lat}&long=${long}`,
    REPORT_CATEGORIES: () => BASE_URL + `api/Relato/categories`,
    GET_PROFILE_INFOS: () => BASE_URL + `api/user/profile`
    //caminho para os outros endpoints ficarao aqui 
}
const BASE_URL = "https://relatabh.azurewebsites.net/"