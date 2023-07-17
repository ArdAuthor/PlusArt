import React from 'react';
//App
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Feed from '../pages/Feed';
import Notifications from '../pages/Notifications';
import Teaching from '../pages/Teaching'

import ButtonPencil from '../components/ButtonPencil';

import Feather from 'react-native-vector-icons/Feather';

import { SvgHouse, SvgPost, SvgRing, SvgMaca, SvgPencil, SvgDefinitivePencil } from './../pages/CustomIcons'

//import StackRoutes from './StackRoutes';

import Classes from '../pages/Teaching';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      tabBarStyle={{

      }}
      screenOptions={{
        tabBarInactiveBackgroundColor: '#fff',
        tabBarStyle: { height: 70 },
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FF005C',
        tabBarInactiveTintColor: '#B9BCBE',
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle:{marginBottom:'10%'}

      }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
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
        name=" "
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <ButtonPencil/>
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
        component={Teaching}
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