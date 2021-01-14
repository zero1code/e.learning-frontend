import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {ContextProvider} from './contexts/context';

const App = () => {
  return (
    <NavigationContainer>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
