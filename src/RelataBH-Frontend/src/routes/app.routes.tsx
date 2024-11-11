import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from 'react';
import { SearchScreen } from "../screens/search";
import HomeScreen from "../screens/home";

export type AppStackNavigation = {
    Home: undefined,
    SearchScreen: undefined,
}

export type StackTypes = NativeStackNavigationProp<AppStackNavigation>;

const AppStack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
    return (
        <AppStack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="HomeScreen" component={HomeScreen} />
            <AppStack.Screen name="SearchScreen" component={SearchScreen} />
        </AppStack.Navigator>
    );
}

export default HomeStack;