import { StyleSheet, Text, View } from 'react-native';
//2
//Importando Navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importando as páginas
import Login from '../pages/Login';
import Feed from '../pages/Feed';
import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'

import TabRoutes from './TabRoutes';
import Intro from '../pages/Intro';
import Introducao from '../pages/Introducao';
import Perfil from '../pages/Perfil';

// Crindo a navegacao

const Stake = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stake.Navigator>

            <Stake.Screen
                name="Intro"
                component={Intro}
                options={{
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: "#996DF"
                    },
                    headerShown: false

                }}
            />

            <Stake.Screen
                name="Introducao"
                component={Introducao}
                options={{
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: "#996DF"
                    },
                    headerShown: false

                }}
            />

            <Stake.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: "#996DF"
                    },
                    headerShown: false

                }}
            />

            <Stake.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: "#996DF"
                    },
                    headerShown: false

                }}
            />

            <Stake.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Meu App',
                    headerStyle: {
                        backgroundColor: "#996DF"
                    },
                    headerShown: false

                }}
            />

            <Stake.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    title: 'Meu App',
                    headerStyle: {
                        backgroundColor: "#996DF"
                    },
                    headerShown: false

                }}
            />

            <Stake.Screen
                name="TabRoutes"
                component={TabRoutes}
                options={{
                    title: 'Meu App',
                    headerStyle: {
                        backgroundColor: "#996DF"
                    },
                    headerShown: false

                }}
            />


        </Stake.Navigator>
    );
}