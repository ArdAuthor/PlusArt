import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";

export default function Introducao(){
    return(
    <View style={estilo.container}>
            <View style={estilo.logo}>
                <Image style={estilo.avatar}
                source={{uri:'https://scontent.xx.fbcdn.net/v/t1.15752-9/357633223_1685585691953804_5542605669993741128_n.jpg?stp=dst-jpg_p403x403&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=mqyCZuf9wk8AX_Z37xw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSOe4gtFgt-O3Je_Ea9Bf22OcViGNRPgpD6rC3bApVt1Q&oe=64C62D93'}}>
                </Image>
                <View>
                <Text style={estilo.texto}>O Plus Art é um aplicativo de desenho desenvolvido pelos alunos do curso de desenvolvimento de aplicativos do IFAM - CMDI Campus Distrito Industrial. Ele permite que os usuários aprendam a desenhar personagens de animes, desenhos e séries. O aplicativo possui uma comunidade onde os usuários podem compartilhar desenhos, tirar dúvidas e interagir. Também oferece ferramentas e guias para iniciantes,  e uma interface realista para esboçar e pintar. O objetivo principal do Plus Art é capacitar e inspirar pessoas interessadas na arte do desenho. Esboce e pinte com a mesma sensação e liberdade de desenhar em um papel, o Plus Art vai até onde a sua criatividade levar.
</Text>
            </View>
            <TouchableOpacity style={estilo.botao}>
                <Text style={estilo.textoBotao}>PRÓXIMO</Text>
            </TouchableOpacity>

            </View>
            <StatusBar/>
        </View>

    )
}

const estilo = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
    },

    logo:{
        justifyContent:'space-between',
        alignItems:'center'
    },

    avatar:{
        width:150,
        height:150,
        borderRadius:200,
        margin:100,
        marginTop:-3

    },

    cabecalho:{


    },

    texto:{
        color:'white',
        fontSize:20,
        margin:12,
        marginTop:-70,
        textAlign:'center'
       
    },

    botao:{
        backgroundColor:'#FF005C',
        padding:19,
        borderRadius:50,
        margin:50,
        marginTop:0

    },

    textoBotao:{
        color:'white',
        textAlign:'center',
        fontSize:17
    }

})