import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from 'react';
import { SearchScreen } from "../screens/search";
import HomeScreen from "../screens/home";
import { SelectLocationScreen } from "../screens/selectLocation";

export type HomeStackNavigation = {
    HomeScreen: { 
        searchedPlace: Place | null,
        region: RelatoRegion | null;
    }
    SearchScreen: undefined
    SelectLocationScreen: undefined 
}

export type HomeStackTypes = NativeStackNavigationProp<HomeStackNavigation>;

const AppStack = createNativeStackNavigator<HomeStackNavigation>();

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