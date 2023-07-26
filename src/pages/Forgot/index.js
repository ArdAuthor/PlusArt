import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';


export default function Forgot() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');


  async function resetar() {
    await firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("Voce receberá um e-mail")
      })
      .catch((error) => {
        alert('Erro..')
      });
  }

  return (
    <View style={styles.container}>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'black',
    justifyContent: 'space-around'

  },
})