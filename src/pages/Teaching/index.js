import React from 'react';
import { View, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';

import { SvgPostGreen } from '../CustomIcons';

export default function Teaching() {

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

       <View style={[styles.row, {gap:20, marginTop:30, alignItems:'center'}]}>
         <View style={styles.BackTitulo}></View>
         <View style={styles.BolaPerfil}></View>
       </View>

      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar />

      <ScrollView>
        <View style={{gap:80, alignItems:'center'}}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />

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
    backgroundColor: 'green',
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

  BackTitulo:{
    backgroundColor:'#470019',
    width:230,
    height:36,
    borderRadius:15,
  },

  BolaPerfil:{
    backgroundColor:'#470019',
    borderRadius:100,
    width:50,
    height:50,
  },

  row: {
    flexDirection: 'row'
  },

  gap: {
    gap: 15
  },
});