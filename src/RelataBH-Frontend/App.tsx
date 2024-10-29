import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Routes from './src/routes/routes';
import AppContext, { AppProvider } from './src/context/app';
import React, { useContext, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import AuthenticationScreen from './src/screens/authentication';
import HomeStack from './src/routes/app.routes';

//SplashScreen.preventAutoHideAsync();

export type AppStackNavigation = {
  Home: undefined,
  Auth: undefined
}
export type StackTypes = NativeStackNavigationProp<AppStackNavigation>;

const Stack = createNativeStackNavigator();

const App: React.FC = () =>  {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppProvider>
          <Routes/>
        </AppProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
