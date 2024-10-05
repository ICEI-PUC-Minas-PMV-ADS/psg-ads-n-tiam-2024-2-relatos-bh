import { ApiMethods } from "./ApiMethods";

export default class BaseApiManager {
    protected headers: Headers = new Headers();

    constructor(){
        this.headers.append("Content-Type", "application/json");
    }

    //metodo generico para chamada de api
    protected callApi: (
        url: string, 
        method: ApiMethods, 
        body: string
    ) => Promise<Response> = async (
        url: string, 
        method: ApiMethods, 
        body: string
    ) => {
        const response = fetch(url, {
            method: method.toString(),
            headers: this.headers,
            redirect: 'follow',
            body: body
        })

        return await response
    }
}