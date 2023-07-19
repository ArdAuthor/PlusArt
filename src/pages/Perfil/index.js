import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { SvgSetaGreen, SvgSetaBrancaDireita } from '../CustomIcons';


export default function Perfil() {

  const navigation = useNavigation();

  function voltarHome () {
    navigation.navigate('TabRoutes')
  }

  function LittleDrawings (){
    return (
      <View style={styles2.squareHolder}>
        <View style={styles2.square}>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <StatusBar style={'light'} />
      <View style={styles.upHolder}>
        <TouchableOpacity onPress={voltarHome}><SvgSetaGreen/></TouchableOpacity>
      </View>

      <View style={styles.profileBackground}>
        <View style={styles.profile}></View>
      </View>

      <View style={styles.userNickHolder}>
        <View>
          <Text style={styles.textNickname}>Placeholder</Text>
          <Text style={styles.textUserTag}>Placeholder#5889</Text>
        </View>

        <Pressable><SvgSetaBrancaDireita/></Pressable>

      </View>

      {/* <View style={styles.textNoteBg}>
        <View style={styles.noteHolder}>
          <Text style={styles.textoNota}> Nota da pessoa nota da pessoa nota da pessoa nota da pessoa nota da pessoa nota da pessoa </Text>
        </View>
      </View> */}

      <ScrollView>
        <View style={styles.scrollContent}>
          <LittleDrawings/>
          <LittleDrawings/>
          <LittleDrawings/>
          <LittleDrawings/>
          <LittleDrawings/>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1
  },

  upHolder: {
    height: '12%',
    width: '100%',
    backgroundColor: 'black',
    borderBottomWidth: 1.5,
    borderColor: '#2DDD69',
    padding:'4%',
    justifyContent:'flex-end',
  },

  profileBackground: {
    width: '100%',
    height: '28%',
    padding: '10%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },

  profile: {
    borderRadius: 100,
    width: '30%',
    height: '63%',
    backgroundColor: 'gray',
    borderColor:'#2DDD69',
    borderWidth:1.5,
  },

  userNickHolder: {
    width: '100%',
    height: '11%',
    backgroundColor: 'black',
    borderBottomWidth: 1.5,
    borderColor: '#2DDD69',
    padding:"4%",
    flexDirection:'row',
    alignItems:'center',
    gap:226,
  },

  textNoteBg: {
    width: '100%',
    height: '20%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#2DDD69'
  },

  noteHolder: {
    width: '80%',
    height: '90%',
    backgroundColor: '#090C19',
    borderRadius: 5,
    padding:'6%',
  },

  textoNota: {
    color: 'white',
    fontSize:12,
  },

  scrollContent:{
    width:'100%',
    height:1200,
    backgroundColor:'black',
    alignItems:'center',
    padding:'4%',
    gap:80,
  },

  textNickname:{
    color:'white',
    fontSize:20,
  },

  textUserTag:{
    color:'#696969',
    fontSize:14,
  },

})

const styles2 = StyleSheet.create ({

    squareHolder:{
      width:'90%',
      height:320,
      backgroundColor:'#090C19',
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#2DDD69'
    },

    square:{
      width:'76%',
      height:260,
      backgroundColor:'white'
    }
})