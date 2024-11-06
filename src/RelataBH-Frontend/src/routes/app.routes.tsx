import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from 'react';
import { SearchScreen } from "../screens/search";
import HomeScreen from "../screens/home";
import { SelectLocationScreen } from "../screens/selectLocation";

export type AppStackNavigation = {
    Home: undefined,
    SearchScreen: undefined
    SelectLocationScreen: undefined 
}


export type StackTypes = NativeStackNavigationProp<AppStackNavigation>;

const AppStack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
    return (
        <AppStack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="HomeScreen" component={HomeScreen} />
            <AppStack.Screen name="SearchScreen" component={SearchScreen} />
            <AppStack.Screen name="SelectLocationScreen" component={SelectLocationScreen} />
        </AppStack.Navigator>
    );
}

export default HomeStack;