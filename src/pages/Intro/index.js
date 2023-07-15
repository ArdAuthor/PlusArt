import React, {useState} from "react";
import {View, Text, Image, StyleSheet, StatusBar, Button,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import {OficialLogo} from '../../img/OficialLogo.png'

import Introducao from "../Introducao";

export default function Intro(){

    const navigation = useNavigation();

    function navegar(){
        navigation.navigate('Login')
    }

    return(
        <View style={estilo.container}>
            
                <View style={estilo.logo}>
                    <Image style={estilo.avatar} source={require('../../img/OficialLogo.png')}/>
                    <TouchableOpacity style={estilo.botao} onPress={navegar}>
                        <Text style={estilo.textoBotao}>Bem Vindo ao Plus Art</Text>
                    </TouchableOpacity>
                </View>
            <StatusBar/>
        </View>
    )
}
 
const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000',
    },
    principal:{
        backgroundColor:'green',
        padding:15
    },

    logo:{
        justifyContent:'space-between',
        alignItems:'center'
    },

    avatar:{
        width:200,
        height:200,
        margin:100,
        borderRadius:200

    },

    botao:{
        backgroundColor:'#FF005C',
        padding:15,
        borderRadius:15,
        margin:70,
        marginTop:150
    },

    textoBotao:{
        color:'white',
        fontSize:17,
        margin:1
    }





})