import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const navigation = useNavigation();



    function login() {
        if (nome === 'Rennan'&& senha === 'qwerty') {
            navigation.navigate('Sobre');
        }
        else {
            alert('Dados Incorretos')
        }

    }

    return (
        <View style={estilos.container}>

            <View style={estilos.telaPrimaria}>

                <View style={estilos.logo}></View>

                <TextInput
                    style={estilos.input}
                    onChangeText={setNome}
                    placeholder='Usuário'
                />
                <TextInput
                    style={estilos.input}
                    onChangeText={setSenha}
                    placeholder='Senha'
                />
                <View style={estilos.menos}>
                    <TouchableOpacity style={estilos.botao} onPress={login}>
                        <Text style={estilos.textoBotao}>Entrar</Text>
                    </TouchableOpacity>

                    <View style={[estilos.textosRow, estilos.marginTopper]}>
                    <Text style={estilos.normalText}>Esqueci minha </Text>
                    <TouchableOpacity onPress={login}>
                        <Text style={estilos.highText}>Senha</Text>
                    </TouchableOpacity>

            </View>



            <View style={estilos.telaSecundaria}>

                <View style={estilos.rowBola}>
                    <TouchableOpacity>
                        <View style={estilos.bolaLogos}></View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={estilos.bolaLogos}></View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style={estilos.bolaLogos}></View>
                    </TouchableOpacity>
                </View>

                </View>

                <View style={estilos.textosRow}>

                    <Text style={estilos.normalText}> Não tem conta? </Text>
                
                    <TouchableOpacity onPress={login}>
                        <Text style={estilos.highText}> Inscreva-se</Text>
                
                    </TouchableOpacity>
                </View>

            </View>


            </View>
        </View>
    );  

}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        padding:40,
        backgroundColor:'black',
        justifyContent:'space-around'

    },

    telaPrimaria:{
        marginTop:'20%',
        flex:1,
    },

    input: {
        backgroundColor: '#C4C4CC',
        padding: 12,
        marginTop: 55,
        borderRadius: 15

    },
    texto: {
        fontSize: 30,
        textAlign: 'center',
        color:'white'
    },
    botao: {
        padding: 12,
        backgroundColor: '#FF005C',
        marginTop: 60,
        borderRadius: 30,
    },
    textoBotao: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    rowBola:{
        flexDirection:'row',
        gap:40,
        justifyContent:'center',
        padding:15,
    },

    menos:{
        paddingHorizontal:40,
    },

    textosRow:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:2,
    },

    normalText:{
        color:'white',
    },

    highText:{
        color:'#FF005C',
        fontWeight:'bold',
    },

    marginTopper:{
        marginTop:'10%',
    },

    telaSecundaria:{
        marginTop:'40%'
    },

    logo:{
        backgroundColor:'blue',
        width:60,
        height:60,
        borderRadius:100,
    },

    bolaLogos:{
        backgroundColor:'blue',
        width:50,
        height:50,
        borderRadius:100,
    },
});