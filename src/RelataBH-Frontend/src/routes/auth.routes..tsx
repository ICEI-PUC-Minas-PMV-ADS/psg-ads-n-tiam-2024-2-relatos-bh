import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthenticationScreen from "../screens/authentication";

export type AuthStackNavigation = {
    Login: undefined
}

export type StackTypes = NativeStackNavigationProp<AuthStackNavigation>;

const Stack = createNativeStackNavigator<AuthStackNavigation>();

export const AuthRoute: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={AuthenticationScreen}/>
        </Stack.Navigator>
    );
}