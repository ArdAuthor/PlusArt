import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { SvgFacebook, SvgGoogle, SvgArrowLeft, SvgEye, SvgEyeClosed } from '../CustomIcons'

import firebase from '../../services/firebaseConnection';


// import Cadastro from ''


export default function Cadastro() {

    const navigation = useNavigation();

    const [olho, setOlho] = useState(olhoFechado)
    const [mostrarSenha, setMostrarSenha] = useState(true)

    const olhoAberto = 'eye'
    const olhoFechado = 'eye-off';

    function exibirSenha() {
        if (olho === olhoAberto) {
            setOlho(olhoFechado)
            setMostrarSenha(true)
        } else {
            setOlho(olhoAberto)
            setMostrarSenha(false)
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [confirmarSenha, setConfirmar] = useState('')

    function Logar() {
        navigation.navigate('Login')
    }


    async function cadastrar() {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((value) => {
                //alert(value.user.uid);
                firebase.database().ref(`user/${value.user.uid}`).set({
                    nome: name,
                    email: email
                })

                alert('Usuario criado com sucesso!');
                setName('');
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error)
                alert('Algo deu errado!');
            })


        if (confirmarSenha == password) {
            setCondition(false)
        }

    }

    return (

        <View style={estilos.container}>

            <TouchableOpacity style={{marginBottom: 10, marginTop:-20 }} onPress={Logar}>
                <SvgArrowLeft />
            </TouchableOpacity>

            <Text style={estilos.textao}> Cadastro </Text>

            <View style={estilos.telaPrimaria}>

                <TextInput
                    style={estilos.input}
                    onChangeText={(texto) => setName(texto)}
                    value={name}
                    placeholder='Usuário'
                    placeholderTextColor={'#000'}
                />

                <TextInput
                    style={estilos.input}
                    onChangeText={(texto) => setEmail(texto)}
                    value={email}
                    placeholder='Email'
                    placeholderTextColor={'#000'}
                    keyboardType='email-address'
                />

                <View style={[estilos.input, estilos.row, estilos.gapper]}>
                    <TextInput
                        style={estilos.textInput}
                        onChangeText={(texto) => setPassword(texto)}
                        value={password}
                        placeholder='Senha'
                        placeholderTextColor={'#000'}
                        secureTextEntry={mostrarSenha}
                    />
                    <TouchableOpacity onPress={exibirSenha}>
                        {olho == olhoFechado ? <SvgEyeClosed name={olho} /> : <SvgEye />}
                    </TouchableOpacity>
                </View>

                <View style={estilos.menos}>
                    <TouchableOpacity style={estilos.botao} onPress={cadastrar}>
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
        marginTop: '12%',
        flex: 1,
    },

    textInput: {
        width: '90%',
        height: '100%',
    },

    input: {
        backgroundColor: '#fff',
        padding: 11,
        marginTop: '14%',
        borderRadius: 15,

    },
    inputError: {
        backgroundColor: '#fff',
        padding: 11,
        marginTop: 70,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: '#FF005C'

    },
    inputFine: {
        backgroundColor: '#fff',
        padding: 11,
        marginTop: 70,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: '#2DDD69'

    },
    menosMargem: {
        marginTop: 30
    },
    texto: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    botao: {
        padding: 18,
        backgroundColor: '#000',
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
        marginTop:-10
    },

    row: {
        flexDirection: 'row'
    },

    gapper: {
        gap: 8
    },
});