import { StyleSheet, Text, View } from 'react-native';
//2
//Importando Navegação
import {NavigationContainer}from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Importando as páginas
import Login from '../pages/Login';
import Feed from '../pages/Feed';
import Home from '../pages/Home'

// Crindo a navegacao

const Stake = createNativeStackNavigator();

export default function StackRoutes() {
  return (
            <Stake.Navigator>

                <Stake.Screen 
                    name="Home2" 
                    component={Home}
                    options={{
                        title:'Meu App',
                        headerStyle:{
                            backgroundColor:"#996DF"
                        },
                       headerShown:false

                   }}
                />

                <Stake.Screen 
                    name="Feed" 
                    component={Feed}
                    //tá errado, o feed é pra 
                    //ser acessivel pelo tab e não pelo stack
                />

                
            </Stake.Navigator>
  );
}