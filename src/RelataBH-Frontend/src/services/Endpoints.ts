export const ENDPOINTS = {
    LOGIN: () => BASE_URL + "api/auth/login",
    REGISTER: () => BASE_URL + "api/auth/register",
    ESQUECI_SENHA: () => BASE_URL + "api/auth/recoverPassword",
    SEARCH_PLACES: (query: string) => BASE_URL + `api/Location/search?query=${query}`,
    REPORTS_IN_RANGE: (lat: number, long: number) => BASE_URL + `api/Relato/search?lat=${lat}&long=${long}`,
    REPORT_CATEGORIES: () => BASE_URL + `api/Relato/categories`,
    REPORT_BY_CITY_ID: (cityId: number) => BASE_URL + `api/Relato?cityId=${cityId}`,
}
const BASE_URL = "https://relatabh.azurewebsites.net/"