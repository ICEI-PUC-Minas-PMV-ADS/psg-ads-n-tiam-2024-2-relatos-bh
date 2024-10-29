import { createStackNavigator } from "@react-navigation/stack";
import Authentication from "../screens/authentication";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Auth" component={Authentication}/>
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;