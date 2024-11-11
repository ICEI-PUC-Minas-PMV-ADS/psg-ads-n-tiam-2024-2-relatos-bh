import React from 'react'
import { View, StyleSheet, Text, Button } from "react-native"
import BoxComponents from './ReportBox'
const reportScreen = () => {

    return (
        <View style={[styles.Container, 
        {
            flexDirection: "column",
        },
        
        ]}>
            <Text style={styles.H1}>RELATAR PROBLEMA</Text>
            <BoxComponents/>
            <Button title='Salvar'></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        justifyContent: 'space-between',
        backgroundColor: "#FFFFFF",
        flex: 1,
        padding: 20,
      },
    H1:{
        alignSelf: "center",
        padding: 30,
        color: "#8b80ab",
        fontSize: 20,
    },
})
export default reportScreen