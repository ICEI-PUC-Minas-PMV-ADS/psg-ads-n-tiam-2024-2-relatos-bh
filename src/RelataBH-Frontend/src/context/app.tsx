import { createContext, useEffect, useState } from "react";
import { TokenService } from "../services/TokenService";

interface AppContext {
    isAuthenticated: Boolean,
    isLoading: Boolean,
    user: object | null,
    isSplashRunning: Boolean,
    updateSplashRunning(isRunning: Boolean): void,
    updateAuthentication(auth: Boolean): void,
    logout(): void
}

const AppContext = createContext({} as AppContext);

export const AppProvider: React.FC<any> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSplashRunning, setSplashRunning] = useState(true);
    
    function updateAuthentication(auth: Boolean){
        setIsAuthenticated(auth);
    }

    const updateSplashRunning = (running: boolean) => {
        setSplashRunning(running)
    }

    const logout = () => {
        TokenService.clearAppData();
    }

    useEffect(() => {
        TokenService.getUserToken().then(token => {
            setIsAuthenticated(token != null);
        })
    }, []);

    return (
        <AppContext.Provider value={{
            isAuthenticated: isAuthenticated, 
            isLoading: isLoading,
            user: null, 
            isSplashRunning: isSplashRunning,
            updateSplashRunning: updateSplashRunning,
            updateAuthentication: updateAuthentication,
            logout: logout
            }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;