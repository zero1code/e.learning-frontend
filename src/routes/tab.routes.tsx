import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Dashboard from '../pages/Dashboard';
import Saved from '../pages/Saved';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        labelPosition: 'beside-icon',
        activeTintColor: '#FF6680',
        inactiveTintColor: '#B7B7CC',
        labelStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Icon size={25} name="home" color={color} />,
          title: 'Home',
        }}
        name="HomeStack"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon size={25} name="heart" color={color} />
          ),
          title: 'Saved',
        }}
        name="SavedStack"
        component={Saved}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
