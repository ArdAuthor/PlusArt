import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { SvgFacebook, SvgGoogle, SvgArrowLeft } from '../CustomIcons'

// import Cadastro from ''

export default function Cadastro() {

    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const navigation = useNavigation();



    function login() {
        if (nome === 'Rennan' && senha === 'qwerty') {
            navigation.navigate('Sobre');
        }
        else {
            alert('Dados Incorretos')
        }

    }

    return (

        <View style={estilos.container}>

            <Text style={estilos.textao}> Cadastro </Text>

            <View style={estilos.telaPrimaria}>

                <TextInput
                    style={estilos.input}
                    onChangeText={setNome}
                    placeholder='Email'
                    placeholderTextColor={'#000'}
                    keyboardType='email-address'
                />
                <TextInput
                    style={estilos.input}
                    onChangeText={setSenha}
                    placeholder='Senha'
                    placeholderTextColor={'#000'}
                    secureTextEntry={true}
                />

                <TextInput
                    style={[estilos.input, estilos.menosMargem ]}
                    onChangeText={setSenha}
                    placeholder='Confirme sua senha'
                    placeholderTextColor={'#000'}
                    secureTextEntry={true}

                />

                <View style={estilos.menos}>
                    <TouchableOpacity style={estilos.botao} onPress={login}>
                        <Text style={estilos.textoBotao}>Prosseguir</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </View>
    );

}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: 'black',
        justifyContent: 'space-around'

    },

    telaPrimaria: {
        marginTop: '20%',
        flex: 1,
    },

    input: {
        backgroundColor: '#fff',
        padding: 12,
        marginTop: 80,
        borderRadius: 15

    },
    menosMargem:{
        marginTop:50
    },
    texto: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    botao: {
        padding: 18,
        backgroundColor: '#000',
        borderWidth:1.5,
        borderColor: '#FF005C',
        marginTop: 60,
        borderRadius: 30,
    },
    textoBotao: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    rowBola: {
        flexDirection: 'row',
        gap: 160,
        justifyContent: 'center',
        padding: 15,
    },

    menos: {
        paddingHorizontal: 60,
    },

    textosRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 2,
    },

    normalText: {
        color: 'white',
    },

    highText: {
        color: '#FF005C',
        fontWeight: 'bold',
    },

    marginTopper: {
        marginTop: '10%',
    },

    telaSecundaria: {
        marginTop: '40%'
    },

    logo: {
        backgroundColor: 'blue',
        width: 60,
        height: 60,
        borderRadius: 100,
    },

    bolaLogos: {
        backgroundColor: 'blue',
        width: 60,
        height: 60,
        borderRadius: 100,
    },

    textao: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold'
    },
});