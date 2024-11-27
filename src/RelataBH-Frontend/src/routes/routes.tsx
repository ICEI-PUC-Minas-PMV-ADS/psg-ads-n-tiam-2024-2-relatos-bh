import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeStack from "./app.routes";
import { AppSplashScreen } from "../screens/splash";
import { AuthRoute } from "./auth.routes.";

export type RootStackNavigation = {
    Home: undefined,
    Auth: undefined,
    Splash: undefined
}
export type RootStackTypes = NativeStackNavigationProp<RootStackNavigation>;

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={AppSplashScreen} />
            <Stack.Screen name="Auth" component={AuthRoute} />
            <Stack.Screen name="Home" component={HomeStack} />
        </Stack.Navigator>
    );
}
