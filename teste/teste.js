import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';


export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



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
        <View style={styles.container}>

            <View style={styles.conteudo}>
                <View style={styles.logo}>
                    <Image
                        style={styles.logoImg}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
                    />

                </View>

                <Text style={styles.title}>Login</Text>

                <Text style={styles.texto}>Email</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={(texto) => setEmail(texto)}
                    value={email}
                />

                <Text style={styles.texto}>Senha</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={(texto) => setPassword(texto)}
                    secureTextEntry={true}
                    value={password}
                />

                <TouchableOpacity style={styles.botao} onPress={logar}>
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 25, }} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={{ textAlign: 'center', color: '#FFF' }}>Criar uma conta</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',

    },

    conteudo: {
        marginTop: 100,
        backgroundColor: '#121212',
        marginLeft: 20,
        marginRight: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 29,
        fontWeight: 'bold',
        color: '#FFF'
    },
    texto: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginBottom: 5,
        padding: 10,
        borderWidth: 0,
        borderColor: '#121212',
        height: 45,
        fontSize: 17,
        backgroundColor: '#00875F',
        borderRadius: 5
    },
    logo: {
        alignItems: 'center'
    },
    logoImg: {
        width: 60,
        height: 60
    },
    botao: {
        backgroundColor: '#996DFF',
        padding: 12,
        borderRadius: 5,
        marginTop: 10
    },
    textoBotao: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17
    }
});