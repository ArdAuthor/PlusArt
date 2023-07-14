import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { SvgFacebook, SvgGoogle, SvgArrowLeft } from '../CustomIcons'

import firebase from '../../services/firebaseConnection';


// import Cadastro from ''

export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [confirmarSenha, setConfirmar] = useState('')

    const [erro, setErro] = useState(true)

    async function cadastrar() {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((value) => {
                //alert(value.user.uid);
                firebase.database().ref('usuario').child(value.user.uid).set({
                    nome: name
                })

                alert('Usuario criado com sucesso!');
                setName('');
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                alert('Algo deu errado!');
            })
            if (confirmarSenha == password) {
                setCondition(false)
            }

    }

    return (

        <View style={estilos.container}>

            <Text style={estilos.textao}> Cadastro </Text>

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

                {/* <TextInput
                    style={[estilos.input, estilos.menosMargem]}
                    onChangeText={setConfirmar}
                    placeholder='Confirme sua senha'
                    placeholderTextColor={'#000'}
                    secureTextEntry={true}
                /> */}

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
        marginTop: '20%',
        flex: 1,
    },

    input: {
        backgroundColor: '#fff',
        padding: 11,
        marginTop: 70,
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
        fontWeight: 'bold'
    },
});