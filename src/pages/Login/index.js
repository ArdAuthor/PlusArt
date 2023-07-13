import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { SvgFacebook, SvgGoogle, SvgArrowLeft } from '../CustomIcons'

import firebase from '../../services/firebaseConnection'

import Cadastro from '../Cadastro';

// import Cadastro from ''

export default function Login() {
   /* console.log('hello world!') */
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function cadastro() {
        navigation.navigate('Cadastro');
    }

        async function logar() {

            if (email === '' || password === '') {
                alert('Informe o usuário e a senha');
                return;
            }
            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then((value) => {
                    navigation.navigate('Home', { user: value.user.email })
                    //Navegando usuario para Home e levando o email do usuario para a tela home

                })
                .catch((error) => {
                    alert('Ops algo deu errado!');
                    return;
                    //Der algum erro mostrar o alert e barrar aqui.
                })

            setEmail('');
            setPassword('');
        }

        return (

            <View style={estilos.container}>

                <Text style={estilos.textao}> Login </Text>

                <View style={estilos.telaPrimaria}>

                    <TextInput
                        style={estilos.input}
                        onChangeText={(texto) => setEmail(texto)}
                        value={email}
                        placeholder='Email'
                        placeholderTextColor={'#000'}
                        keyboardType='email-address'

                    />
                    <TextInput
                        style={estilos.input}
                        onChangeText={(texto) => setPassword(texto)}
                        value={password}
                        placeholder='Senha'
                        placeholderTextColor={'#000'}
                        secureTextEntry={true}

                    />

                    <View style={estilos.menos}>
                        <TouchableOpacity style={estilos.botao} onPress={logar}>
                            <Text style={estilos.textoBotao}>Entrar</Text>
                        </TouchableOpacity>

                        <View style={[estilos.textosRow, estilos.marginTopper]}>
                            <Text style={estilos.normalText}>Esqueci minha </Text>
                            <TouchableOpacity onPress={() => { }}>
                                <Text style={estilos.highText}>Senha</Text>
                            </TouchableOpacity>

                        </View>



                        <View style={estilos.telaSecundaria}>

                            <View style={estilos.rowBola}>
                                <TouchableOpacity>
                                    <SvgGoogle />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <SvgFacebook />
                                </TouchableOpacity>

                            </View>

                        </View>

                        <View style={estilos.textosRow}>

                            <Text style={estilos.normalText}> Não tem conta? </Text>

                            <TouchableOpacity onPress={cadastro}>
                                <Text style={estilos.highText}> Inscreva-se</Text>

                            </TouchableOpacity>
                        </View>

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
        marginTop: 70,
        borderRadius: 15

    },
    texto: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    botao: {
        padding: 16,
        borderWidth: 1.5,
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
        fontWeight: 'bold',
        marginTop: 40,
    },
});