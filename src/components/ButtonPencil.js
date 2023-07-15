import React from "react";
import {View, Text, StyleSheet} from 'react-native'

import { SvgDefinitivePencil } from "../pages/CustomIcons";

export default function ButtonPencil(){
    return(
        <View style={styles.container}>
            <SvgDefinitivePencil/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:170

    }
})