import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton, Searchbar } from "react-native-paper";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AppStackNavigation, StackTypes } from "../../../routes/app.routes";
import { ReportDetail } from "./ReportDetail";
import { ReportCategoryComponent } from "./components/ReportCategoryComponent";
import { MapComponent } from "./components/MapComponent";

const MapScreen: React.FC = () => {

    const navigation = useNavigation<StackTypes>();
    const route = useRoute<RouteProp<AppStackNavigation, "HomeScreen">>();


    const [selectedReport, setSelectedReport] = useState<UserReport | null>(null);
    const [showSearchMap, setShowSearchMap] = useState(false);
    const [searchedPlace, setSearchedPlace] = useState<Place | null>(null);
    const [showCategory, setShowCategory] = useState<boolean>(false);

    useEffect(() => {
        setSearchedPlace(route.params?.searchedPlace ?? null);
    }, [route.params?.searchedPlace])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Searchbar
                    style={{ marginStart: 8, marginVertical: 16, flex: 1 }}
                    placeholder="Buscar bairro..."
                    focusable={false}
                    onPress={() => { navigation.navigate("SearchScreen") }}
                    onChangeText={(text) => { }}
                    value={searchedPlace?.name ?? ""}
                />
                <IconButton
                    icon={showCategory ? "filter-remove" : "filter"}
                    size={20}
                    onPress={() => { 
                        setShowCategory(!showCategory)
                        console.log(showCategory)
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <ReportCategoryComponent style={{ position: 'absolute', top: 0, zIndex: 1 }} isVisible={showCategory} />

                {/* {showSearchMap && 
                <Button mode="contained" style={{position: 'absolute', top: 0, zIndex: 1, marginTop: 46}} onPress={() => console.log("buscar")}>Buscar nesta área</Button>} */}

                <MapComponent
                    style={{ width: '100%', height: '100%', zIndex: 0 }}
                    onReportSelected={(report) => { setSelectedReport(report) }}
                    onRegionChanged={(region) => { setShowSearchMap(true) }}
                />

                <ReportDetail report={selectedReport} style={{ position: 'absolute', bottom: 0, zIndex: 1 }} />

            </View>
        </View>
    );
}

export default MapScreen;