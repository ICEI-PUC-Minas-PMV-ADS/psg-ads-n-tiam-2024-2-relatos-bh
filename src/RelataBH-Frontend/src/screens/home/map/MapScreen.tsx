import { ToastAndroid, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton, Searchbar, Button, Icon, Badge, ActivityIndicator } from "react-native-paper";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AppStackNavigation, StackTypes } from "../../../routes/app.routes";
import { ReportDetail } from "./ReportDetail";
import { ReportCategoryComponent } from "./components/ReportCategoryComponent";
import { MapComponent } from "./components/MapComponent";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Region } from "react-native-maps";
import SearchBar from "react-native-screens/lib/typescript/components/SearchBar";
import { ReportSearchBar } from "./components/ReportSearchBar";
import { ReportSearchButton } from "./components/ReportSeachButton";
import { ReportSearchLoading } from "./components/ReportSearchLoading";
import { ReportService } from "../../../services/report/ReportService";

const MapScreen: React.FC = () => {

    const navigation = useNavigation<StackTypes>();
    const route = useRoute<RouteProp<AppStackNavigation, "HomeScreen">>();

    const [selectedReport, setSelectedReport] = useState<UserReport | null>(null);
    const [searchedPlace, setSearchedPlace] = useState<Place | null>(null);
    const [showCategory, setShowCategory] = useState<boolean>(false);
    const [selectedCategories, setSelectedCategories] = useState<ReportCategory[] | null>(null);
    const [regionToSearch, setRegionToSearch] = useState<Region | null>(null);
    const [loadingRegion, setLoadingRegion] = useState<Boolean>(false);
    const [userReposts, setUserReports] = useState<UserReport[] | null>(null);

    useEffect(() => {
        setSearchedPlace(route.params?.searchedPlace ?? null);
    }, [route.params?.searchedPlace]);

    const handleSearchPlace = (place: Place) => {
        setLoadingRegion(true);
        setRegionToSearch(null);
        console.log(`[handleSearchPlace] Searching ${place?.name}...`);
        setTimeout(() => {
            setLoadingRegion(false);
        }, 1000);
    }

    const handleSearchByCategory = () => {
        setLoadingRegion(true);
        setRegionToSearch(null);
        console.log(`Searching ${searchedPlace?.name}...`);
        setTimeout(() => {
            setLoadingRegion(false);
        }, 1000);
    }

    const handleSearchRegion = async () => {
        setLoadingRegion(true);
        setRegionToSearch(null);

        const reports = await ReportService.fetchByCoordinates(regionToSearch?.latitude, regionToSearch?.longitude);
        if(reports.success){
            ToastAndroid.show("Loaded!", ToastAndroid.SHORT);
            setUserReports(reports.data);
        } else {
            ToastAndroid.show("Erro!", ToastAndroid.SHORT);
        }

        setLoadingRegion(false);
        // console.log(`Searching (${regionToSearch?.latitude} ${regionToSearch?.longitude})...`);
        // setTimeout(() => {
        //     setLoadingRegion(false);
        // }, 1000);
    }

    useEffect(() => {
        if(selectedCategories != null){
            handleSearchByCategory()
        }
    }, [selectedCategories]);

    useEffect(() => {
        if(searchedPlace != null){
            handleSearchPlace(searchedPlace)
        }
    }, [searchedPlace])

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ReportSearchBar 
                onSearchClicked={() => { navigation.navigate("SearchScreen") }}
                onCategoryClicked = {() => { setShowCategory(!showCategory) }}
                place = { searchedPlace }
                categoryCount={ selectedCategories?.length ?? 0 }
            />
            <View style={{ flex: 1 }}>

                { regionToSearch && <ReportSearchButton onSeachClicked={() => handleSearchRegion()}/> }

                { loadingRegion && <ReportSearchLoading /> }

                <MapComponent
                    style={{ width: '100%', height: '100%', zIndex: 0 }}
                    points={ userReposts }
                    onReportSelected={(report) => { setSelectedReport(report) }}
                    onRegionChanged={(region) => { setRegionToSearch(region) }}
                />

                <ReportDetail report={selectedReport} style={{ position: 'absolute', bottom: 0, zIndex: 1 }} />

                <ReportCategoryComponent 
                    style={{ position: 'absolute', bottom: 0, zIndex: 1 }} 
                    isVisible={showCategory}
                    onCategorySelected={(categories) => { 
                        setShowCategory(false)
                        setSelectedCategories(categories) 
                    }}
                    selectedCategories={selectedCategories}
                    onClose={() => { setShowCategory(false) } }
                    />
            </View>
        </GestureHandlerRootView>
    );
}

export default MapScreen;