import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabRoutes from './tab.routes';
import Home from '../pages/Home';
import Classes from '../pages/Classes';
import Splash from '../pages/Splash';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Splash" component={Splash} />
      <App.Screen name="Home" component={Home} />
      <App.Screen
        name="MainBottom"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <App.Screen name="Classes" component={Classes} />
    </App.Navigator>
  );
};
export default Routes;
