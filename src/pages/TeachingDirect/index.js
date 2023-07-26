import React from 'react';
import { View, StyleSheet, Text, StatusBar, ScrollView, TouchableOpacity, Touchable } from 'react-native';
import { useNavigation } from '@react-navigation/native'

//import {Profile} from '../Home'
import { SvgProfile } from '../CustomIcons';

export default function Teaching00() {

    const navigation = useNavigation();

    function IrAula() {
        navigation.navigate('Teaching')
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

    return (
        <View style={styles.container}>

            <View style={styles.upHolder}><Profile /></View>
            <ScrollView>

                <TouchableOpacity onPress={IrAula}>
                    <View style={styles.scrollCenter}>
                        <View style={styles.moduleHolder}>
                            <View style={styles.moduleTop}>
                                <View style={styles.textHolder}><Text style={styles.textTag}> Estilos e traços</Text></View>
                            </View>
                            <View style={styles.tagContent}>
                                <View style={styles.packBars}>
                                    <View style={styles.barraProgressoHoras}></View>
                                    <View style={styles.barraProgresso}></View>
                                </View>
                                <View style={styles.packNumbers}></View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
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

    upHolder: {
        width: '100%',
        height: 86,
        borderBottomColor: '#FF9EC1',
        borderWidth: 1.5,
        flexDirection: 'row',
    },

    scrollCenter: {
        padding: '5%',
        alignItems: 'center'
    },

    moduleHolder: {
        height: 160,
        width: 320,
        backgroundColor: '#7F2DE8',
        borderRadius: 10
    },

    moduleTop: {
        height: '34%',
        width: '100%',
        backgroundColor: '#C32DE8',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: '3%',
    },

    textHolder: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        width: '58%',
        backgroundColor: '#000',
        borderRadius: 10
    },

    textTag: {
        color: '#fff',
        fontSize: 18
    },

    tagContent: {
    },

    packBars: {
        padding: 20,
        gap: 32,
    },

    packNumbers: {

    },

    barraProgressoHoras: {
        height: 13,
        width: '40%',
        backgroundColor: '#fff',
        borderRadius: 10
    },

    barraProgresso: {
        height: 13,
        width: '62%',
        backgroundColor: '#fff',
        borderRadius: 10
    },

    progresso: {
        height: '100%',
        width: '10%',
        backgroundColor: '#E7C85A',
    },
})