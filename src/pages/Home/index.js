import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { SvgPencil, SvgHouse, SvgProfile } from './../CustomIcons'

import Perfil from '../Perfil';

export default function Home() {

    const navigation = useNavigation();



    function createDrawing() {
        return (
            <TouchableOpacity onPress={{}}>
                <View style={styles.profile}>
                    <SvgProfile />
                </View>
            </TouchableOpacity>
        )
    }

    function IrProfile() {
        navigation.navigate('Perfil')

    }

    function Profile() {

        return (
            <View>
                <TouchableOpacity style={styles.profile} onPress={IrProfile}>
                        <SvgProfile />
                </TouchableOpacity>
            </View>
        )
    }
    function Drawing() {

        const [titulo, setTitulo] = useState()

        const [condition, setCondition] = useState(true)

        return (

            <View >
                <TouchableOpacity onLongPress={() => condition ? setCondition(false) : setCondition(true)} onPress={() => { }}>
                    <View style={styles.drawing}>
                        <View style={condition ? styles.backDrawing : styles.backDrawingGreen}>
                        </View>

                        <View style={styles.flexEnd}>
                            {condition ? <Text style={styles.text}>{titulo}</Text> : <TextInput style={styles.input} onChangeText={setTitulo}>{titulo}</TextInput>}
                        </View>

                    </View>

                </TouchableOpacity>

            </View>

        )
    }

    return (

        <View style={styles.container}>
            <StatusBar />
            <View>
                <Profile />
            </View>


            <ScrollView>

                <View style={styles.flexRow}>
                    <View style={styles.gapper}>
                        <Drawing />
                        <Drawing />
                        <Drawing />
                        <Drawing />
                        <Drawing />
                      
                    </View>
                    <View style={styles.gapper}>
                        <Drawing />
                        <Drawing />
                        <Drawing />
                        <Drawing />
                        <Drawing />
                    </View>
                </View>

                <Text style={{ color: 'white', marginTop: 170, position: 'absolute', bottom: 10, left: '50%', }}>qwerty</Text>
            </ScrollView>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },

    flexRow: {
        flexDirection: 'row',
        gap: 40, justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },

    gapper: {
        gap: 42
    },

    drawing: {
        width: 140,
        height: 150,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        margin: 12
    },

    backDrawing: {
        width: 140,
        height: 15,
        backgroundColor: '#FF005C',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    backDrawingGreen: {
        width: 140,
        height: 15,
        backgroundColor: '#2DDD69',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    text: {
        width: 140,
        height: 30,
        backgroundColor: '#FF9EC1',
        color: 'white',
        fontSize: 12,
    },

    input: {
        width: 140,
        height: 30,
        backgroundColor: '#6DE896',
        fontSize: 12,
        color: 'white'
    },

    flexEnd: {
        width: 140,
        height: 135,
        justifyContent: 'flex-end',
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

    textoJonas:{
        fontSize:10,
        color:'white'
    },
});