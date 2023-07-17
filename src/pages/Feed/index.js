import React from 'react';
import { View, StyleSheet, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import {SvgProfile, SvgSearch, SvgReload } from '../CustomIcons';

export default function Feed() {

  const navigation = useNavigation();


  function IrProfile() {
    navigation.navigate('Perfil')
  }

  function Profile() {

    return (
      <View>
        <TouchableOpacity onPress={IrProfile} style={styles.profile}>
            <SvgProfile />
        </TouchableOpacity>
      </View>
    )
  }

  function Post() {
    return (
      <View style={styles.BackBloco}>
        <View style={[styles.row, styles.gap]}>

          <View style={styles.BigQuadrado}></View>

          <View style={styles.gap}>

            <View style={styles.SmallQuadrados}>
            </View>

            <View style={styles.SmallQuadrados}>
            </View>

          </View>

        </View>

        <View style={[styles.row, { gap: 20, marginTop: 30, alignItems: 'center' }]}>
          <View style={styles.BackTitulo}></View>
          <View style={styles.BolaPerfil}></View>
        </View>

      </View>
    )
  }

  function PostGreen() {
    return (
      <View style={styles2.BackBloco}>
        <View style={[styles2.row, styles2.gap]}>

          <View style={styles2.BigQuadrado}></View>

          <View style={styles2.gap}>

            <View style={styles2.SmallQuadrados}>
            </View>

            <View style={styles2.SmallQuadrados}>
            </View>

          </View>

        </View>

        <View style={[styles2.row, { gap: 20, marginTop: 30, alignItems: 'center' }]}>
          <View style={styles2.BackTitulo}></View>
          <View style={styles2.BolaPerfil}></View>
        </View>

      </View>
    )
  }


  return (
    <View style={styles.container}>
      <StatusBar />

      <View style={styles.upHolder}>

        <Profile />
        <View style={styles.upHolderComplement}>
          <TouchableOpacity><SvgReload/></TouchableOpacity>
          <TouchableOpacity><SvgSearch/></TouchableOpacity>
        </View>

      </View>

      <ScrollView style={{marginTop:30}}>
        <View style={{ gap: 80, alignItems: 'center' }}>
          <Post />
          <Post />
          <PostGreen/>
          <PostGreen/>
          <Post />
          <Post />
          <PostGreen/>

        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  BackBloco: {
    backgroundColor: '#190009',
    width: 360,
    height: 360,
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#FF005C'
  },

  BigQuadrado: {
    width: 190,
    height: 190,
    backgroundColor: '#000',
    borderWidth: 1.5,
    borderColor: '#FF005C',
    borderRadius: 15,
  },

  SmallQuadrados: {
    width: 110,
    height: 110,
    backgroundColor: '#000',
    borderWidth: 1.5,
    borderColor: '#FF005C',
    borderRadius: 15,
  },

  BackTitulo: {
    backgroundColor: '#470019',
    width: 230,
    height: 36,
    borderRadius: 15,
  },

  BolaPerfil: {
    backgroundColor: '#470019',
    borderRadius: 100,
    width: 50,
    height: 50,
  },

  upHolder:{
    width:'100%',
    height:86,
    borderBottomColor:'#FF9EC1',
    borderWidth:1.5,
    flexDirection:'row',
  },

  upHolderComplement:{
    flexDirection:'row',
    gap:20,
    marginLeft:'60%',
    marginTop:38,
  },

  profile: {
    marginTop: '40%',
    marginLeft: 30,
    width: 43,
    height: 43,
    backgroundColor: '#FF005C',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
},

  row: {
    flexDirection: 'row'
  },

  gap: {
    gap: 15
  },
});

const styles2 = StyleSheet.create ({
  BackBloco: {
    backgroundColor: '#051A0D',
    width: 360,
    height: 360,
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#2DDD69'
  },

  BigQuadrado: {
    width: 190,
    height: 190,
    backgroundColor: '#000',
    borderWidth: 1.5,
    borderColor: '#2DDD69',
    borderRadius: 15,
  },

  SmallQuadrados: {
    width: 110,
    height: 110,
    backgroundColor: '#000',
    borderWidth: 1.5,
    borderColor: '#2DDD69',
    borderRadius: 15,
  },

  BackTitulo: {
    backgroundColor: '#092C15',
    width: 230,
    height: 36,
    borderRadius: 15,
  },

  BolaPerfil: {
    backgroundColor: '#092C15',
    borderRadius: 100,
    width: 50,
    height: 50,
  },

  row: {
    flexDirection: 'row'
  },

  gap: {
    gap: 15
  },

  textoJonas:{
    fontSize:10,
    color:'#fff'
},
})