import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
//2
//Importando Navegação
//Rennan
import {NavigationContainer}from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importando as páginas
import Login from './src/pages/Login';
import Feed from './src/pages/Feed';
import TabRoutes from './src/routes/TabRoutes';
import StackRoutes from './src/routes/StackRoutes';

// Crindo a navegacao

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StackRoutes/>
    </NavigationContainer>
  )
}