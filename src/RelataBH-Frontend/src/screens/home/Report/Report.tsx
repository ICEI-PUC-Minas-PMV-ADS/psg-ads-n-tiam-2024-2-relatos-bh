import React from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native"
import BoxComponents from './ReportBox'
const reportScreen = () => {

    return (
        <View style={[styles.Container, 
        {
            flexDirection: "column",
        },]}>
            <Text style={styles.H1}>RELATAR PROBLEMA</Text>
            <BoxComponents/>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Salvar</Text>
            </TouchableOpacity>

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
    },addButton: {
        backgroundColor: '#6f6095',  
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,            
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
      },
      addButtonText: {
        color: '#ffffff',            
        fontSize: 16,
        fontWeight: 'bold',
      },
      
})
export default reportScreen