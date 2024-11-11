import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from 'react';
import { SearchScreen } from "../screens/search";
import HomeScreen from "../screens/home";
import  { Region } from "react-native-maps"
import { SelectLocationScreen } from "../screens/selectLocation";
import BoxComponent from "../screens/home/Report/ReportBox";

export type AppStackNavigation = {
    BoxComponent: { region?: { latitude: number; longitude: number ; latitudeDelta: number ;longitudeDelta:number} };
    Home: { searchedPlace: Place | null }
    SearchScreen: undefined
    SelectLocationScreen: undefined 
}


export type StackTypes = NativeStackNavigationProp<AppStackNavigation>;

const AppStack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
    return (
        <AppStack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="HomeScreen" component={HomeScreen} />
            <AppStack.Screen name="BoxComponent" component={BoxComponent} />
            <AppStack.Screen name="SearchScreen" component={SearchScreen} />
            <AppStack.Screen name="SelectLocationScreen" component={SelectLocationScreen} />
        </AppStack.Navigator>
    );
}

export default HomeStack;