import { createContext, useState } from "react";
import { AuthService } from "../services/auth/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
    isLoading: boolean,
    user: object | null,
    signIn(email: string, password: string): Promise<Boolean>;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<any> = ({children}) => {

    const [isLoading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    async function signIn(email: string, password: string): Promise<Boolean>{
        setLoading(true);
        const response = await new AuthService().login(email, password);
        AsyncStorage.setItem("token", "faketoken");
        setLoading(false);
    
        return response.success == true;
    }

    return (
        <AuthContext.Provider value={{isLoading: isLoading, user: {}, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;