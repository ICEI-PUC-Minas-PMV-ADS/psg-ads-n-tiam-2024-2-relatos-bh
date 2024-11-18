import { useEffect, useState } from "react";
import { StyleProp, ToastAndroid, ViewStyle } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from 'expo-location';
import React from "react";
import { ReportService } from "../../../../services/report/ReportService";

type Props = {
    onReportSelected: (report: UserReport | null) => void,
    onRegionChanged: (region: Region) => void,
    style?: StyleProp<ViewStyle>
}

export const MapComponent: React.FC<Props> = ({
    style,
    onReportSelected,
    onRegionChanged,
}) => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const mapRef: React.LegacyRef<MapView> | undefined = React.createRef();
    const [userReposts, setUserReports] = useState<UserReport[] | null>(null);

    const fetchReports = async (lat: number, long: number) => {
        let userReportsResponse = await ReportService.fetchInRange(lat, long);
        if(userReportsResponse.success){
            setUserReports(userReportsResponse.data);
        } else {
            ToastAndroid.show('[fetchReports] Erro! Tente novamente mais tarde.', ToastAndroid.SHORT);
        }
    }

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
        
        if(location != null || location != undefined){
            fetchReports(location?.coords.latitude, location?.coords.longitude)
        }
    }, [location]);

    return (
        <MapView
            style={style}
            ref={mapRef}
            showsUserLocation={true}
            rotateEnabled={false}
            showsMyLocationButton={false}
            showsCompass={false}
            pitchEnabled={false}
            onRegionChange={onRegionChanged}
        >
            {userReposts &&
                userReposts.map((report: UserReport, index: number) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: report.lat,
                            longitude: report.long
                        }}
                        title={report.type}
                        onSelect={() => { onReportSelected(report) }}
                        onDeselect={() => { onReportSelected(null) }}
                    />
                ))
            }
        </MapView>
    );
}