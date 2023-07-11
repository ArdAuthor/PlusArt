import React from 'react';
//App
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Feed from '../pages/Feed';
import Notifications from '../pages/Notifications';
import Jonas from '../pages/Classes'

import Feather from 'react-native-vector-icons/Feather';

import { SvgHouse, SvgPost, SvgRing, SvgMaca, SvgPencil } from './../pages/CustomIcons'

//import StackRoutes from './StackRoutes';

import StackRoutes from '../routes/StackRoutes';
import Classes from '../pages/Classes';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: '#FF9EC1',
        tabBarActiveBackgroundColor: '#FF7FAD',
        tabBarStyle: { height: 70 },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#000'
      }}
    >

      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <SvgHouse cor={color} />
          },
          headerShown: false
        }}
      />

      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <SvgPost cor={color} />
          },
          headerShown: false
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          //headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <SvgRing cor={color} />
          },
          headerShown: false
        }}
      />

      <Tab.Screen
        name="Class"
        component={Classes}
        options={{
          //headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <SvgMaca cor={color} />
          },
          headerShown: false
        }}
      />

    </Tab.Navigator>
  )
}