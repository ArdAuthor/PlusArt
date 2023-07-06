import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

export default function Home() {


    
    function mostrar() {
        
    }
    function Drawing() {
        
        const [titulo, setTitulo] = useState()
        
        const [condition, setCondition] = useState(true)

        return (

            <View >
                <TouchableOpacity onLongPress={() => condition ? setCondition(false) : setCondition(true)}>
                    <View style={styles.drawing}>
                        <View style={styles.backDrawing}></View>

                        <View style={styles.flexEnd}>
                            { condition ? <Text style={styles.text}>{titulo}</Text> : <TextInput style={styles.input}onChangeText={setTitulo}>{titulo}</TextInput> }
                        </View>

                    </View>

                </TouchableOpacity>

            </View>

        )
    }

    return (

        <View style={styles.container}>
            <Drawing />
            <Drawing />
            <Drawing/>
            <Drawing/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },

    drawing: {
        width: 120,
        height: 120,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    backDrawing: {
        width: 120,
        height: 15,
        backgroundColor: '#FF005C',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    text: {
        width: 120,
        height: 20,
        backgroundColor: '#FF9EC1',
        color: 'white',
        fontSize: 12,
    },

    input: {
        width: '100%',
        height: 20,
        backgroundColor: 'blue',
        fontSize:12,
        color:'white'
    },

    flexEnd: {
        width: 120,
        height: 105,
        justifyContent: 'flex-end',
    },
});