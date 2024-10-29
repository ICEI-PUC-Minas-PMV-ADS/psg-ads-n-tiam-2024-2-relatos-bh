import { View } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import * as Location from 'expo-location';
import React, { useEffect, useState } from "react";
import { Button, Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/app.routes";

const MapScreen: React.FC = () => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const mapRef: React.LegacyRef<MapView> | undefined = React.createRef();
    const navigation = useNavigation<StackTypes>();

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                //permission denied.
                console.log("no permission.")
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        })();
    }, []);

    useEffect(() => {
        mapRef.current?.animateCamera({
            center: {
                "latitude": location?.coords.latitude ?? 0,
                "longitude": location?.coords.longitude ?? 0
            },
            zoom: 14
        })

        console.log(location)
    }, [location])

    return (
        <View style={{ flex: 1 }}>
            <Searchbar
                style={{ marginHorizontal: 8, marginVertical: 16 }}
                placeholder="Buscar bairro..."
                focusable={false}
                onPress={() => { navigation.navigate("SearchScreen") }}
                onChangeText={(text) => { }}
                value={""}
            />
            <MapView
                style={{ flex: 1 }}
                ref={mapRef}
                showsUserLocation={true}
                rotateEnabled={false}
            />
        </View>
    );
}

export default MapScreen;