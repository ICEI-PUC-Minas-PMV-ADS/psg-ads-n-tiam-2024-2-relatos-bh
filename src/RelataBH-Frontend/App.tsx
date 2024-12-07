import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/context/app';
import React from 'react';
import { Routes } from './src/routes/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

const App: React.FC = () =>  {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppProvider>
        <GestureHandlerRootView>
          <PaperProvider>
            <Routes/>
          </PaperProvider>
        </GestureHandlerRootView>
        </AppProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
