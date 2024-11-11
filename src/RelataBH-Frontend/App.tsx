import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';
import { AppProvider } from './src/context/app';
import React from 'react';

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
