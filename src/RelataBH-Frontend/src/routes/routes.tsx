import { useContext, useEffect } from "react";
import { AuthProvider } from "../context/auth";
import AppContext from "../context/app";
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthenticationScreen from "../screens/authentication";
import HomeStack from "./app.routes";
import { useNavigation } from "@react-navigation/native";
import { AppSplashScreen } from "../screens/splash";

export type AppStackNavigation = {
    Home: undefined,
    Auth: undefined,
    Splash: undefined
}
export type StackTypes = NativeStackNavigationProp<AppStackNavigation>;

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
    const { isAuthenticated, isSplashRunning } = useContext(AppContext);
    const navigation = useNavigation<StackTypes>();

    useEffect(() => {
        SplashScreen.hideAsync();
    }, [])

    useEffect(() => {
        if(!isSplashRunning){
            isAuthenticated ? navigation.navigate("Home") : navigation.navigate("Auth");
        }
    }, [isSplashRunning])

    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={AppSplashScreen}/>
            <Stack.Screen name='Auth' >
                {() => (
                    <AuthProvider>
                        <AuthenticationScreen />
                    </AuthProvider>
                )}
            </Stack.Screen>
            <Stack.Screen name='Home' component={HomeStack} />
        </Stack.Navigator>
    );
}

export default Routes;