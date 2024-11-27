import { createContext, useState } from "react";
import { AuthService } from "../services/auth/AuthService";

interface AuthContextData {
    isLoading: boolean,
    user: object | null,
    signIn(email: string, password: string): Promise<Boolean>;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<any> = ({children}) => {

    const [isLoading, setLoading] = useState(false);

    async function signIn(email: string, password: string): Promise<Boolean>{
        setLoading(true);
        const response = await AuthService.login(email, password);
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