import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Searchbar } from "react-native-paper";
import { RouteProp, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { AppStackNavigation, StackTypes } from "../../../routes/app.routes";
import { ReportDetail } from "./ReportDetail";
import { ReportCategoryComponent } from "./components/ReportCategoryComponent";
import { MapComponent } from "./components/MapComponent";

const MapScreen: React.FC = () => {
    
    const navigation = useNavigation<StackTypes>();
    const [userReposts, setUserReports] = useState<UserReport[] | null>(null);
    const [selectedReport, setSelectedReport] = useState<UserReport | null>(null);
    const [showSearchMap, setShowSearchMap] = useState(false);
    const route = useRoute<RouteProp<AppStackNavigation, "Home">>();
    const [searchedPlace, setSearchedPlace] = useState<Place | null>(route.params?.searchedPlace ?? null);
    
    useEffect(() => {
        console.log(searchedPlace)
    }, [searchedPlace])

    useEffect(() => {
        setUserReports(createReportMock());
    }, []);

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
            <View style={{ flex: 1 }}>
                <ReportCategoryComponent 
                    style={{position: 'absolute', top: 0, zIndex: 1}} />

                {/* {showSearchMap && 
                <Button mode="contained" style={{position: 'absolute', top: 0, zIndex: 1, marginTop: 46}} onPress={() => console.log("buscar")}>Buscar nesta área</Button>} */}

                <MapComponent 
                    style={{ width: '100%', height: '100%', zIndex: 0 }}
                    onReportSelected={(report) => { setSelectedReport(report) }}
                    onRegionChanged={(region) => { setShowSearchMap(true) }}
                    reports={userReposts}
                />
                
                <ReportDetail report={selectedReport} style={{ position: 'absolute', bottom: 0, zIndex: 1 }} />
                
            </View>
        </View>
    );
}

const createReportMock = (): UserReport[] => {
    return [
        {
            name: "Buraco na rua",
            description: "Faz meses que esse buraco está incomodando a vizinhança!",
            address: "Rua Walter Ianni, 255 - São Gabriel",
            lat: -19.8157,
            long: -43.9542,
            photos: ["https://picsum.photos/700", "https://picsum.photos/700", "https://picsum.photos/700", "https://picsum.photos/700", "https://picsum.photos/700"],
            type: "buraco",
            likeNumber: 10,
            createdAt: Date.now()
        } as UserReport,

        {
            name: "Problema 2",
            description: "Descrição 2",
            address: "Endereço 2",
            lat: 49,
            long: 12,
            photos: ["", ""],
            type: "buraco",
            likeNumber: 10,
            createdAt: Date.now()
        } as UserReport,

        {
            name: "Problema 3",
            description: "Descrição 3",
            address: "Endereço 3",
            lat: 21,
            long: 12,
            photos: ["", ""],
            type: "buraco",
            likeNumber: 10,
            createdAt: Date.now()
        } as UserReport,
    ]
}

export default MapScreen;