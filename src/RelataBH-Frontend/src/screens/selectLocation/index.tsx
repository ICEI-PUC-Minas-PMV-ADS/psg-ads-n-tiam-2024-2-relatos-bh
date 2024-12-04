import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StatusBar, Button, Alert } from "react-native";
import MapView, { LatLng, Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import { HomeStackTypes } from "../../routes/app.routes";

export const SelectLocationScreen: React.FC = () => {
  const navigation = useNavigation<HomeStackTypes>();
  const [region, setRegion] = useState<Region | null>(null);
  const [markerCoordinate, setMarkerCoordinate] = useState<LatLng | null>(null);
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");


  const fetchAddress = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'SeuAppName/1.0 (email@dominio.com)',
          }
        }
      );

      if (!response.ok) {
        throw new Error("Erro na requisição, status: " + response.status);
      }

      const data = await response.json();

      if (data && data.address) {
        const road = data.address.road || "Rua não encontrada";
        const city = data.address.city || "Cidadde Não Encontrada"
        setAddress(road);
        setCity(city);
      } else {
        setAddress("Endereço não encontrado");
      }
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
      setAddress("Erro ao buscar endereço");
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão negada", "Não foi possível acessar a localização.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });

      setMarkerCoordinate({ latitude, longitude });
      fetchAddress(latitude, longitude);
    })();
  }, []);

  const onRegionChangeComplete = (region: Region) => {
    setRegion(region);
    const { latitude, longitude } = region;
    setMarkerCoordinate({ latitude, longitude });
    fetchAddress(latitude, longitude);
  };

  const handleBackButtonPress = () => {
    console.log({
      latitude: region?.latitude ?? 0,
      longitude: region?.longitude ?? 0,
      latitudeDelta: region?.latitudeDelta ?? 0,
      longitudeDelta: region?.longitudeDelta ?? 0,
      address: `${address}, ${city}`,
      city: city
    } as RelatoRegion);
    if (region) {
      navigation.navigate("HomeScreen", {
        searchedPlace: null,
        region: {
          latitude: region?.latitude ?? 0,
          longitude: region?.longitude ?? 0,
          latitudeDelta: region?.latitudeDelta ?? 0,
          longitudeDelta: region?.longitudeDelta ?? 0,
          address: `${address}, ${city}`,
          city: city
        } as RelatoRegion
      })
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        initialRegion={region || undefined}
        onRegionChangeComplete={onRegionChangeComplete}
      >

        {markerCoordinate && (
          <Marker
            coordinate={markerCoordinate}
            draggable
            onDragEnd={(e) => {
              const { latitude, longitude } = e.nativeEvent.coordinate;
              setMarkerCoordinate({ latitude, longitude });
              fetchAddress(latitude, longitude);
            }}
            title="Posicione o marcador"
          />
        )}
      </MapView>

      <View style={{ position: "absolute", bottom: 50, alignSelf: "center" }}>
        <Text>Endereço: {address}, {city}</Text>
      </View>

      <Button title="Confirmar Localização" onPress={handleBackButtonPress} />
    </SafeAreaView>
  );
};
