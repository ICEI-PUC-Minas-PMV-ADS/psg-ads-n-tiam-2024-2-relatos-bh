import { useContext, useEffect } from "react"
import AuthContext, { AuthProvider } from "../context/auth"
import Home from "../screens/home";
import Authentication from "../screens/authentication";
import AppContext from "../context/app";
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthenticationScreen from "../screens/authentication";
import HomeStack from "./app.routes";
import { useNavigation } from "@react-navigation/native";

export type AppStackNavigation = {
    Home: undefined,
    Auth: undefined
}
export type StackTypes = NativeStackNavigationProp<AppStackNavigation>;

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
    const { isAuthenticated, isLoading } = useContext(AppContext);
    const navigation = useNavigation<StackTypes>();

    useEffect(() => {
        console.log(isAuthenticated)
        if (isAuthenticated) {
            navigation.navigate("Home");
            SplashScreen.hideAsync();
        }
    }, [isAuthenticated])

    return (
        <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
            {/* <AuthProvider>
                
            </AuthProvider> */}
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