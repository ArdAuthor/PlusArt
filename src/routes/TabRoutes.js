import React from 'react';
//App
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Feed from '../pages/Feed';
import Notifications from '../pages/Notifications';

import Feather from 'react-native-vector-icons/Feather';

//import StackRoutes from './StackRoutes';

import StackRoutes from '../routes/StackRoutes';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  return(
      <Tab.Navigator
      screenOptions={{
      tabBarInactiveBackgroundColor:'#FF9EC1',
      tabBarActiveBackgroundColor:'#FF7FAD'
      }}
      >

        <Tab.Screen
          name="Home"
          component={StackRoutes}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />
            },
            headerShown:false
          }}
        />

        <Tab.Screen 
          name="Feed" 
          component={Feed} 
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" color={color} size={size} />
            },
            headerShown:false
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            //headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Feather name="phone-call" color={color} size={size} />
            },
            headerShown:false
          }}
        />
      </Tab.Navigator>
  )
}