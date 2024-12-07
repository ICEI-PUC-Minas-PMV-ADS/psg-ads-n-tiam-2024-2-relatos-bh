import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, ToastAndroid, View } from "react-native";
import { Button, Text, Searchbar, IconButton, Divider, ActivityIndicator, Chip } from "react-native-paper";
import { HomeStackNavigation, HomeStackTypes } from "../../routes/app.routes";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";

export const ReportDetail: React.FC = () => {
    const navigation = useNavigation<HomeStackTypes>();
    const route = useRoute<RouteProp<HomeStackNavigation, "ReportDetailScreen">>();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [report, setReport] = useState<UserReport | null>();
    const window = Dimensions.get('window')

    useEffect(() => {
        setReport(route.params.relato ?? null);
        setIsEdit(route.params.isEdit ?? false);
        navigation.setOptions({ title: route.params.relato?.titulo ?? "" });
    }, [route.params.relato])

    return (
        <View style={{ flex: 1 }}>
            <ScrollView >
                <FlatList
                    horizontal={true}
                    data={report?.images}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <Image resizeMode={'cover'} style={{ width: window.width, height: 300 }} source={{ uri: item.url }} />
                    }
                    keyExtractor={(_, index) => index.toString()}
                />
                <Text>{report?.dsc}</Text>
                <Text>{report?.endereco}</Text>

                <Chip style={{ marginEnd: 4, marginBottom: 4 }} >
                    {report?.codIndicador}
                </Chip>

                <MapView style={{ width: '100%', height: 150, }}
                    cameraZoomRange={{ minCenterCoordinateDistance: 1, maxCenterCoordinateDistance: 3 }}
                    zoomEnabled={false}
                    rotateEnabled={false}
                    scrollEnabled={false}
                    showsMyLocationButton={false}
                    showsUserLocation={false}
                    followsUserLocation={false}
                    initialRegion={{
                        latitude: Number(report?.latitude ?? 0),
                        longitude: Number(report?.longitude ?? 0),
                        latitudeDelta: 0.00922,
                        longitudeDelta: 0.00421,

                    }}
                >
                    <Marker coordinate={{
                        latitude: Number(report?.latitude ?? 0),
                        longitude: Number(report?.longitude ?? 0),
                    }} />
                </MapView>

            </ScrollView>


            {isEdit &&
                <Button style={{ marginBottom: 12, marginHorizontal: 12 }} mode="contained" onPress={() => { }}>
                    Atualizar relato
                </Button>
            }
        </View>
    );
}
