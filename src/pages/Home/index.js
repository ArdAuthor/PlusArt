import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';

import { SvgPencil, SvgHouse, SvgProfile } from './../CustomIcons'

export default function Home() {


    function createDrawing() {
        return (
            <TouchableOpacity onPress={{}}>
                <View style={styles.profile}>
                    <SvgProfile />
                </View>
            </TouchableOpacity>
        )
    }

    function Profile() {
        return (
            <TouchableOpacity onPress={() => { }}>
                <View style={styles.profile}>
                    <SvgProfile />
                </View>
            </TouchableOpacity>
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
        gap: 20
    },

    drawing: {
        width: 110,
        height: 110,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        margin: 12
    },

    backDrawing: {
        width: 110,
        height: 15,
        backgroundColor: '#FF005C',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    backDrawingGreen: {
        width: 110,
        height: 15,
        backgroundColor: '#2DDD69',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    text: {
        width: 110,
        height: 20,
        backgroundColor: '#FF9EC1',
        color: 'white',
        fontSize: 12,
    },

    input: {
        width: 110,
        height: 20,
        backgroundColor: '#6DE896',
        fontSize: 12,
        color: 'white'
    },

    flexEnd: {
        width: 120,
        height: 105,
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
});