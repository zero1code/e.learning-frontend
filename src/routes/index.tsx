import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Splash from '../pages/Splash';

const App = createStackNavigator();

const Routes: React.FC = () => {
  const [loading, setLoading] = useState(false);
  setTimeout(function () {
    setLoading(true);
  }, 2000);

  if (loading) {
    return (
      <App.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <App.Screen name="Home" component={Home} />
      </App.Navigator>
    );
  }

  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Splash" component={Splash} />
    </App.Navigator>
  );
};

export default Routes;
