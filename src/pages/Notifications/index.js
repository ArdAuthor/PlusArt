import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Image, StatusBar, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { SvgProfile, SvgHash, SvgHeart } from "../CustomIcons";

//import Profile from '../Home'

import Perfil from '../Perfil';


export default function Notifications(){

    const navigation = useNavigation();

    function BlocoHolder(){
        return(
            <View style={estilo.bloco1}>
            <View style={estilo.bloquinho}>
                <View style={estilo.bloquinho1}>
                    <TouchableOpacity style={estilo.noti}>
                    <Ionicons name="notifications" size={24} color="blue" />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={estilo.texto}>
                <Text style={estilo.Texto}>Talvez você goste!</Text>
            </View>       
        </View>
        )

    }

    function IrProfile() {
        navigation.navigate('Perfil')

    }

    function Profile() {

        return (
            <TouchableOpacity onPress={IrProfile} style={{marginLeft:300}}>
                <View style={estilo.profile}>
                    <SvgProfile />
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={estilo.container}>
            <ScrollView style={estilo.ScrollView}>
                <View style={estilo.cabecalho}>
                  <Profile/>
                </View>
                
                <View style={estilo.bloco}>
              
                    <View style={estilo.bloco1}>
                        <View style={estilo.bloquinho}>
                            <View style={estilo.bloquinho1}>

                                <Ionicons name="notifications" size={24} color="blue" style={estilo.noti} />

                            </View>
                        </View>
                        <View style={estilo.texto}>
                            <Text style={estilo.Texto}>Talvez você goste!</Text>
                        </View>       
                    </View>

                    <View style={estilo.bloco1}>
                        <View style={estilo.pfl}></View>
                        <View style={estilo.prfl}></View>

                        <SvgHeart/>
                        
                        <Text style={estilo.comentario}>UserNull curtiu sua obra!</Text>
                    </View>

                    <View style={estilo.bloco1}>
                        <View style={estilo.perfil1}></View>
                        <View style={estilo.perfil2}></View>
                        <Text style={estilo.notiTexto}>Continue de onde parou!
Null#0001</Text>
                    </View>

                    <View style={estilo.bloco1}>
                    <View style={estilo.bloquinho}>
                            <View style={estilo.bloquinho1}>
                                
                            </View>

                        </View>

                    </View>

                </View>
            </ScrollView>
            <StatusBar/>
        </View>
        
    )
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center'

    },
    
    ScrollView:{
        backgroundColor:'black',
        
    },

    cabecalho:{
        backgroundColor:'black',
        height:90,
        width:500,
        borderColor:'white',
        borderWidth:1,
        marginLeft:-10,
        marginTop:-30
        
    },

    bloco:{
        backgroundColor:'#0E1224',
        width:360,
        height:600,
        marginLeft:20,
        marginTop:10,
        borderRadius:10,
        gap:20,
        
        
    },

    bloco1:{
        backgroundColor:'#000',
        width:340,
        height:150,
        marginLeft:10,
        marginTop:10,
        borderRadius:10
    },

    bloquinho:{
        backgroundColor:'#0E1224',
        width:30,
        height:30,
        borderRadius:50,
        marginTop:8,
        marginLeft:5
    },

    bloquinho1:{
        backgroundColor:'#0E1224',
        width:30,
        height:30,
        borderRadius:50,
        marginLeft:40,
        marginTop:0
    },

    Texto:{
        color:"white",
        marginTop:60,
        textAlign:'center',
        fontSize:17
    },

    noti:{
        backgroundColor:'black',
        width:30,
        height:30,
        borderRadius:50,
        marginLeft:220,
        alignItems:'center'
    },

    bola:{
        backgroundColor:'black',
        width:60,
        height:60,
        borderRadius:100,
        marginTop:-50,
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    },

    perfil:{
        backgroundColor:'black',
        width:40,
        height:40,
        borderRadius:100,
        marginLeft:320,
        marginTop:30,
        alignItems:'center',
    },

    texto2:{
        backgroundColor:'black',
        width:300,
        height:150,
        marginLeft:23,
        marginTop:20,
        borderRadius:10
    },

    comentario:{
        color:"white",
        marginTop:60,
        textAlign:'center',
        fontSize:17,

    },

    pfl:{
        backgroundColor:'#0E1224',
        width:30,
        height:30,
        borderRadius:50,
        marginTop:8,
        marginLeft:5
    },
        
    prfl:{
          backgroundColor:'#0E1224',
        width:30,
        height:30,
        borderRadius:50,
        marginTop:-30,
        marginLeft:50
    },

    texto3:{
        backgroundColor:'black',
        width:300,
        height:150,
        marginLeft:23,
        marginTop:20,
        borderRadius:10
    },

    perfil1:{
        backgroundColor:'#0E1224',
        width:30,
        height:30,
        borderRadius:50,
        marginTop:8,
        marginLeft:5
    },

    perfil2:{
        backgroundColor:'#0E1224',
        width:30,
        height:30,
        borderRadius:50,
        marginTop:-30,
        marginLeft:50
    },

    notiTexto:{
        color:"white",
        marginTop:60,
        textAlign:'center',
        fontSize:17,
    },

    profile: {
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 30,
        width: 43,
        height: 43,
        backgroundColor: '#FF005C',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})