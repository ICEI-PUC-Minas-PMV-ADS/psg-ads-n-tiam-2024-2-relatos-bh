import { ApiMethods } from "./ApiMethods";
import BaseApiManager from "./BaseApiManager";
import { ENDPOINTS } from "./Endpoints";

export class AuthApiManager extends BaseApiManager {
    
    login = async (email: string, password: string) => {
        const url = ENDPOINTS.LOGIN();
        const body = JSON.stringify({email: email, password: password, returnSecureToken: true});
        await this.callApi(url, ApiMethods.POST, body)
            .then(response => response.text())
            .then(result => console.log(result))
    }

    //esse arquivo vai ter as funcoes que chamam o backend e estao relacionadas a autenticacao
    //login, registro e esqueci minha senha

    register = async (name:string, email: string, password: string, confirmarPassword: string) => {
        const url = ENDPOINTS.REGISTER();
        const body = JSON.stringify({name:name, email: email, password: password, confirmarPassword: confirmarPassword, returnSecureToken: true});
        await this.callApi(url, ApiMethods.POST, body)
            .then(response => response.text())
            .then(result => console.log(result))
    }
    
    recoverPassword = async () => {}
}
