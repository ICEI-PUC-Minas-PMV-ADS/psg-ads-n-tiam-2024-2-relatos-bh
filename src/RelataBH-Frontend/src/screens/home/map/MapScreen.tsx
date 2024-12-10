import { ToastAndroid, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackNavigation, HomeStackTypes } from "../../../routes/app.routes";
import { ReportDetail } from "./ReportDetail";
import { ReportCategoryComponent } from "./components/ReportCategoryComponent";
import { MapComponent } from "./components/MapComponent";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Region } from "react-native-maps";
import { ReportSearchBar } from "./components/ReportSearchBar";
import { ReportSearchButton } from "./components/ReportSeachButton";
import { ReportSearchLoading } from "./components/ReportSearchLoading";
import { ReportService } from "../../../services/report/ReportService";
import { Button, IconButton } from "react-native-paper";

const MapScreen: React.FC = () => {

    const navigation = useNavigation<HomeStackTypes>();
    const route = useRoute<RouteProp<HomeStackNavigation, "HomeScreen">>();

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

    const handleSearchPlace = async (place: Place) => {
        setLoadingRegion(true);
        setRegionToSearch(null);
        console.log("Search by place");
        const reports = await ReportService.fetchReportByCityId(place.id);
        setLoadingRegion(false);
        setRegionToSearch(null);
        if (reports.success) {
            ToastAndroid.show("Loaded!", ToastAndroid.SHORT);
            setUserReports(reports.data);
        } else {
            ToastAndroid.show("Erro!", ToastAndroid.SHORT);
        }
    }

    const handleSearchByCategory = async () => {
        setLoadingRegion(true);
        setRegionToSearch(null);
        if(regionToSearch == null){
            setLoadingRegion(false);
            return;
        }
        if(selectedCategories == null){
            setLoadingRegion(false);
            return;
        }

        const reports = await ReportService.fetchByCategory(regionToSearch?.latitude, regionToSearch?.longitude, selectedCategories[0]?.id ?? 0);
        if (reports.success) {
            ToastAndroid.show("Loaded!", ToastAndroid.SHORT);
            setUserReports(reports.data ?? []);
        } else {
            ToastAndroid.show("Erro! " + reports.error, ToastAndroid.SHORT);
        }
        // setTimeout(() => {
        //     setLoadingRegion(false);
        // }, 1000);
    }

    const handleSearchRegion = async () => {
        setLoadingRegion(true);
        setRegionToSearch(null);
        if(regionToSearch == null){
            setLoadingRegion(false);
            return;
        }
        const reports = await ReportService.fetchByCoordinates(regionToSearch?.latitude, regionToSearch?.longitude);
        setLoadingRegion(false);
        if (reports.success) {
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

    const searchUserLocation = async (latitude: number, longitude: number) => {
        setLoadingRegion(true);
        const reports = await ReportService.fetchByCoordinates(latitude, longitude);
        if (reports.success) {
            ToastAndroid.show("Loaded!", ToastAndroid.SHORT);
            setUserReports(reports.data);
        } else {
            ToastAndroid.show("Erro!", ToastAndroid.SHORT);
        }
        setLoadingRegion(false);
    }

    useEffect(() => {
        if (selectedCategories != null) {
            handleSearchByCategory()
        }
    }, [selectedCategories]);

    useEffect(() => {
        if (searchedPlace != null) {
            handleSearchPlace(searchedPlace)
        }
    }, [searchedPlace]);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ReportSearchBar
                onSearchClicked={() => { navigation.navigate("SearchScreen") }}
                onCategoryClicked={() => { 
                    setSelectedReport(null);
                    setShowCategory(!showCategory)
                 }}
                place={searchedPlace}
                categoryCount={selectedCategories?.length ?? 0}
            />
            <View style={{ flex: 1 }}>

                {regionToSearch && <ReportSearchButton onSeachClicked={() => handleSearchRegion()} />}

                {loadingRegion && <ReportSearchLoading />}

                <MapComponent
                    style={{ width: '100%', height: '100%', zIndex: 0 }}
                    points={userReposts}
                    searchOnUserLocation={(latitude, longitude) => { searchUserLocation(latitude, longitude) }}
                    onReportSelected={(report) => { setSelectedReport(report) }}
                    onRegionChanged={(region) => { setRegionToSearch(region) }}
                />

                <ReportCategoryComponent
                    style={{ position: 'absolute', bottom: 0, zIndex: 1 }}
                    isVisible={showCategory}
                    onCategorySelected={(categories) => {
                        setShowCategory(false)
                        setSelectedCategories(categories)
                    }}
                    selectedCategories={selectedCategories}
                    onClose={() => { setShowCategory(false) }}
                />
                
                <ReportDetail report={selectedReport} style={{ position: 'absolute', bottom: 0, zIndex: 1 }} />
            </View>
        </GestureHandlerRootView>
    );
}

export default MapScreen;