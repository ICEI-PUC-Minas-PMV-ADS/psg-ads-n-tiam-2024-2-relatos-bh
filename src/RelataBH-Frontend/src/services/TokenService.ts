import AsyncStorage from "@react-native-async-storage/async-storage"

export class TokenService {
    private static readonly tokenKey = "token"

    static getUserToken = async () : Promise<string | null> => {
        return await AsyncStorage.getItem(TokenService.tokenKey);
    }

    static saveUserToken = (token: string) => {
        AsyncStorage.setItem(TokenService.tokenKey, token);
    }

    static clearUserToken = () => {
        AsyncStorage.clear();
    }
}
