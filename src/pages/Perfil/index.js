import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.CaixaMaior}>

        <View style={styles.CaixaUm}>

          <View style={styles.CaixinhaUm}>

            <View style={styles.linhaVerdeUm}>

            </View>

          </View>

          <View style={styles.CaixinhaDois}>

          </View>

          <View style={styles.Foto}>

          </View>

          <View style={styles.CaixaDois}>

            <View style={styles.barraDois}>

              <Text style={styles.placeholder}> Placeholder

              </Text>

            </View>

            <View>
              <Text style={styles.Placeholder5889}>

                Placeholder#5889

              </Text>
            </View>

            <View style={styles.caixaTres}>

              <View style={styles.notaDaPessoa}>

                <Text style={styles.letras}> Nota da pessoa nota da pessoa nota da pessoa nota da pessoa nota da pessoanota da pessoa nota da pessoa nota da pessoa nota da pessoa nota da pessoa nota da pessoanota da pessoa nota da pessoa nota da pessoa nota da...</Text>

              </View>

              <View style={styles.linhaVerdeTres}>

              </View>

              <View style={styles.caixaQuatro}>

                <View style={styles.desenho}>

                </View>

                <View style={styles.linhaVerdeQuatro}>

                </View>

                <View style={styles.linha}>

                </View>

              </View>

            </View>

          </View>

        </View>

      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

  },

  CaixaMaior: {

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -590,
  },

  CaixaUm: {

    alignItems: 'center',
    width: 435,
    height: 200,
    backgroundColor: '#1B1629',
    marginTop: 41

  },

  CaixinhaUm: {

    width: 435,
    height: 50,
    backgroundColor: '#1B1629',
    marginTop: -40,
  },

  linhaVerdeUm: {

    width: 435,
    height: 1,
    backgroundColor: '#2DDD69',
    marginTop: 50,

  },

  Foto: {

    width: 90,
    height: 90,
    borderRadius: 60,
    backgroundColor: '#fff',
    marginTop: -220
  },

  CaixinhaDois: {

    width: 435,
    height: 80,
    backgroundColor: '#000',
    marginTop: 190,

  },

  barraDois: {

    width: 0,
    height: 140,
    backgroundColor: '',

  },

  caixaTres: {

    alignItems: 'center',
    width: 435,
    height: 600,
    backgroundColor: '#000',
    marginTop: -1
  },

  notaDaPessoa: {

    alignItems: 'center',
    width: 290,
    height: 190,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#1B1629',
  },

  letras: {

    textAlign: 'left',
    width: 290,
    height: 300,
    color: '#fff',
    marginTop: 50,
  },

  linhaVerdeTres: {

    width: 435,
    height: 1,
    backgroundColor: '#2DDD69',
    marginTop: 12,

  },

  desenho: {

    width: 150,
    height: 150,
    backgroundColor: '#fff',
    marginTop: 30,
    marginLeft: 135,

  },

  linhaVerdeQuatro: {

    width: 435,
    height: 1,
    backgroundColor: '#2DDD69',
    marginTop: 30,

  },

  linha: {


    width: 435,
    height: 1,
    backgroundColor: '#2DDD69',
    marginTop: -430,
  },

  placeholder: {

    width: 200,
    height: 200,
    color: '#fff',
    marginTop: 60,
    fontSize: 20,
    marginLeft: 10

  },

  Placeholder5889: {

    width: 200,
    height: 20,
    color: '#696969',
    marginTop: -50,
    fontSize: 15,
    marginLeft: 13
  }




});