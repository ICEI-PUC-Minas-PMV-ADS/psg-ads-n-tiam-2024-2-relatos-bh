import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

interface AppContext {
    isAuthenticated: boolean,
    isLoading: boolean,
    user: object | null,
    updateAuthentication(auth: Boolean): void
}

const AppContext = createContext({} as AppContext);

export const AppProvider: React.FC<any> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    function updateAuthentication(auth: Boolean){
        setIsAuthenticated(auth as boolean);
    }

    useEffect(() => {
        AsyncStorage.getItem("token").then(token => {
            console.log(">>>>>" + token)
            setIsAuthenticated(token != null);
        })
    }, []);

    return (
        <AppContext.Provider value={{
            isAuthenticated: isAuthenticated, 
            isLoading: isLoading,
            user: null, 
            updateAuthentication: updateAuthentication
            }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;