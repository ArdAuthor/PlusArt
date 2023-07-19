import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
    Canvas,
    Path,
    Skia,
    SkPath,
    useTouchHandler
} from '@shopify/react-native-skia';
import React, { Children, useRef, useState } from 'react';
import { LogBox } from 'react-native'

LogBox.ignoreAllLogs(true);

LogBox.ignoreAllLogs(true);

export default function Desenhar() {
    return (

        <View style={styles.fundo}>

            <View style={styles.cima}>

                <View style={styles.boxLeft}></View>
                <View style={styles.boxRight}></View>

            </View>

            <View style={styles.areaDesenho}>

                <View style={styles.desenho}>
                    <Desenho />
                </View>

            </View>

            <View style={styles.baixo}>

                <View style={styles.funcoes}></View>
                <View style={styles.workspace}></View>

            </View>
            <StatusBar />
        </View>



    );

    function Desenho() {

        const pontoCorrente = useRef<SkPath | null>(null);
        const [pontos, setPontos] = useState<SkPath[]>([]);


        const toqueTela = useTouchHandler({
            onStart: ({ x, y }) => {
                pontoCorrente.current = Skia.Path.Make();
                pontoCorrente.current.moveTo(x, y);
            },
            onActive: ({ x, y }) => {
                pontoCorrente.current.lineTo(x, y);
            },
            onEnd: () => {
                setPontos((valores) => valores.concat(pontoCorrente.current));
            }
        });

        return (
            <Canvas style={{ flex: 1 }} onTouch={toqueTela}>
                {Children.toArray(
                    pontos.map((p) => <Path path={p} style='stroke' color="black" strokeWidth={7} />)
                )}
            </Canvas>
        );

    }
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#100E09',

    },

    boxRight: {
        height: 50,
        backgroundColor: '#100E09',
        width: 145,

    },

    cima: {
        flexDirection: "row",
        flex: 1,
    },

    baixo: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1,
    },

    boxLeft: {
        width: 213,
        height: 50,
        backgroundColor: '#1F1F1F',

    },

    workspace: {
        height: 200,
        backgroundColor: '#100E09',
        width: 260,
        flex: 1,
    },

    funcoes: {
        height: 200,
        width: 110,
        backgroundColor: '#1F1F1F',


    },

    desenho: {
        height: 550,
        width: 360,
        backgroundColor: 'white',

    },

    areaDesenho: {

        marginLeft: 20,

        flex: 15,

    }
});