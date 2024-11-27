import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/context/app';
import React from 'react';
import { Routes } from './src/routes/routes';

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

export default App;
