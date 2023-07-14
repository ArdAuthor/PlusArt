import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button,Image, TouchableOpacity } from 'react-native';
import firebase from './src/firebaseConnection';

console.disableYellowBox=true;

export default function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');



  async function cadastrar(){
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((value)=> {
          //alert(value.user.uid);
          firebase.database().ref('usuario').child(value.user.uid).set({
            nome: name
          })

          alert('Usuario criado com sucesso!');
          setName('');
          setEmail('');
          setPassword('');
      })
      .catch((error)=>{
        alert('Algo deu errado!');
      })
  }



  return(
    <View style={styles.container}>

        <View style={styles.conteudo}>

            <View style={styles.logo}>
                    <Image
                                style={styles.logoImg}
                                source={{uri:'https://cdn-icons-png.flaticon.com/512/149/149071.png'}}
                    />
            </View>

            <Text style={styles.texto}>Nome</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(nome) => setName(nome) }
                value={name}
                placeholder="Digite seu nome"
            />

            <Text style={styles.texto}>Email</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setEmail(texto) }
                value={email}
                placeholder="Digite seu email"
            />

            <Text style={styles.texto}>Senha</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setPassword(texto) }
                value={password}
                placeholder="Digite sua senha"
            />

            <TouchableOpacity style={styles.botao} onPress={cadastrar}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121212',
        
    
      },
    
      conteudo:{
         marginTop:100,
         backgroundColor:'#121212',
         marginLeft:20,
         marginRight:20
      }, 

    logo:{
        alignItems:'center'
    },
    logoImg:{
        width: 150,
        height:150
    },
    
    texto: {
        fontSize: 15,
        color:'#FFF'
    },
    input:{
        marginBottom: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#121212',
        height: 45,
        fontSize: 17,
        backgroundColor:'#00875F',
        borderRadius:5
    },
    botao:{
        backgroundColor:'#996DFF',
        padding:12,
        borderRadius:5,
        marginTop:10
  },
  textoBotao:{
     color: '#FFF',
     textAlign:'center',
     fontWeight:'bold',
     fontSize:17
  }
});