import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity ,ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import {SvgSeta} from '../CustomIcons'


export default function Feed() {
  return (

    <View style={styles.fundo}>
      <StatusBar style='light' />
      <ScrollView>
      
      <TouchableOpacity style={styles.publicacao}>

        <View style={styles.publi}>
          
        </View> 

       </TouchableOpacity>

       <View style={styles.linha}>

<View style={styles.linhasDois}>

</View>

</View>


      <View>

      <Text style={styles.texto}>Texto opcional comentanto sobre o desenho, o passo a passo, dificuldades e entre outros.
      </Text>

      </View>

      <TouchableOpacity style={styles.publiDois}>
        
      </TouchableOpacity>

      <View>
        
        <Text style={styles.textoDois}>Texto opcional comentanto sobre o desenho, o passo a passo, dificuldades e entre outros.</Text>

      </View>

      <View style={styles.eclipse}>

        <View style={styles.circulo}>

        </View>

      </View>

      <View style={styles.barra}>
        <View style={styles.bolinha}>
        </View>
        <View style={styles.bolaSeta}>
        <TouchableOpacity style={styles.seta}>
        <SvgSeta cor='white'/>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.linhaTres}>

</View>

<View style={styles.circuloDois}>

</View>

  <TextInput
  
  style={styles.inputDois}
  placeholder='Comentários....'>

  </TextInput>

<View style={styles.linhaQuatro}>

</View>

<View style={styles.circuloTres}>

</View>

<View>

  <Text style={styles.comentarios}>Achei bom. Entretanto, acho que poderia melhorar as bordas já que é um desenho mais estilizado. </Text>

</View>

<View style={styles.linhaQuatro}>

</View>


<View style={styles.circuloQuatro}>

</View>

<View>

<Text style={styles.comentarios}>O realismo combina muito bem com esse tipo de desenho, aproveite as dicas que o app disponibiliza sobre traços e cores </Text>

</View>

<View style={styles.linhaQuatro}>

</View>

<View style={styles.circuloSeis}>

</View>

<View>

<Text style={styles.comentarios}>Isso foi gerado por uma estupidez natural???</Text>

</View>

<View style={styles.linhaQuatro}>

</View>

<View style={styles.circuloSete}>

</View>


<View>

<Text style={styles.comentarios}>Desista dos seus sonhos!!!!</Text>

</View>

       <View style={styles.bolinhaSeta}>

        <TouchableOpacity style={styles.bolinhaSeta2}>

        <Entypo name="chevron-with-circle-up" size={50} color="black" />

        </TouchableOpacity>

       </View>


      </ScrollView>

      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#100E09',
  },

  publicacao:{
    alignItems:'center'
  },

  eclipse:{
    marginTop:455,
    flexDirection:'row',
    alignItems:'center',
    gap:20,
    position: 'absolute',
  },

  texto:{
    color:'#FCE8E3',
    backgroundColor:'#FCE8E3',
    padding:10,
    borderRadius:15,
    width:240,
    height:37,
    
  },

  bola:{
    backgroundColor: '#FCE8E3',
    borderRadius:100,
    width:60,
    height:60,
  },

  publi:{
    backgroundColor:'#FCE8E3',
    width: 300,
    height: 300,
    marginTop: 185,
    borderRadius:15,
  },

  linha:{

    backgroundColor:'#FCE8E3',
    width:410,
    height:2,
    margin:30,
    marginLeft:13
    
  },

  linhasDois:{

    backgroundColor:'#FCE8E3',
    width:410,
    height:2,
    margin:90,
    marginLeft:1

  },

  texto:{

    color: 'white',
    marginLeft:14,
    
  },

  publiDois:{

    backgroundColor:'#FCE8E3',
    width: 190,
    height: 190,
    marginTop: 50,
    marginLeft:65,
    borderRadius:15,

  },

  textoDois:{

    color: 'white',
    width:130,
    height:160,
    marginTop:-192,
    marginLeft:270
  },



  barra:{
    position:'absolute',
    width:'100%',
    height: 90,
    backgroundColor:'#FF9EC1',
  },

  bolinha:{

    width:80,
    height:80,
    backgroundColor:'#fce8e3',
    borderRadius:80,
    position: 'absolute',
    top: 44,
    left: '74%'
    // marginLeft:290,
    // marginTop:-45,
    
//maisfácil refazer
  },

  linhaTres:{

    width:700, 
    height:2,
    marginTop:700,
    backgroundColor:'#FFF',
  },

  linhaQuatro:{

    width:700, 
    height:2,
    marginTop:20,
    backgroundColor:'#FFF',

  },

  circuloDois:{

    width:60,
    height:60,
    backgroundColor:'#FFF',
    marginTop:20,
    marginLeft:30,
    borderRadius:60,
  },


  inputDois:{

    height:40,
    backgroundColor:'#FFF',
    marginLeft:110,
    marginTop:-50,
    borderRadius:70

  },

  circuloTres:{

    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:'#FFF',
    marginTop:50,
    marginLeft:30,
  },

  comentarios:{

    fontSize:15,
    color:'#FFF',
    width:210,
    height:70,
    marginTop:-60,
    marginLeft:120

  },

  circuloQuatro:{

    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:'#FFF',
    marginTop:50,
    marginLeft:30,

  },

  circuloCinco:{

    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:'#FFF',
    marginTop:50,
    marginLeft:30,

  },

  circuloSeis:{

    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:'#FFF',
    marginTop:50,
    marginLeft:30,

  },

  circuloSete:{

    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:'#FFF',
    marginTop:50,
    marginLeft:30,

  },

  bolinhaSeta:{

    width:50,
    height:50,
    backgroundColor:'#ff005c',
    marginTop:-55,
    borderRadius:60,
    marginLeft:360

  },

  bolaSeta:{
    position:'absolute',
    top: '38%',
    left: 20
    
  }

});