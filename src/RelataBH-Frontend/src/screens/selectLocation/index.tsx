import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react"
import { View, Text, SafeAreaView, StatusBar, Button, } from "react-native"
import MapView, { Region } from "react-native-maps"
import { StackTypes } from "../../routes/app.routes";

export const SelectLocationScreen: React.FC = () => {
    const navigation = useNavigation<StackTypes>();

    const [region, setRegion] = useState<Region | null>(null)

    const onRegionChange= (region: Region) =>{
        console.log( region );
        setRegion(region)
      }
      const handleBackButtonPress = () => {
        if (region) {
            
            navigation.setParams({ region: region});
        }
        navigation.goBack();
    };
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <MapView style={{ flex: 1 }} onRegionChange={onRegionChange}/>
            
            <Text style={{position: "absolute",right:"-50%",left:"-50%", top:0, bottom:0}}>LOCATION</Text>
            
            <Button title="ABC" onPress={handleBackButtonPress}></Button>
            
        </SafeAreaView>
    )
}


