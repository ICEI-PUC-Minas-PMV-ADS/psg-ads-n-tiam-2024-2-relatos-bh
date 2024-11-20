import { useEffect, useState } from "react";
import { StyleProp, ToastAndroid, ViewStyle } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from 'expo-location';
import React from "react";
import { ReportService } from "../../../../services/report/ReportService";

type Props = {
    onReportSelected: (report: UserReport | null) => void,
    onRegionChanged: (region: Region) => void,
    points: UserReport[] | null,
    style?: StyleProp<ViewStyle>
}

export const MapComponent: React.FC<Props> = ({
    style,
    points,
    onReportSelected,
    onRegionChanged
}) => {
    const mapRef: React.LegacyRef<MapView> | undefined = React.createRef();
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [isMapReady, setMapReady] = useState<Boolean>(false);

    const fetchReports = async (lat: number, long: number) => {
        //call backend
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log("no permission.")
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        })();
    }, []);

    useEffect(() => {
        if(location != null || location != undefined){
            mapRef.current?.animateCamera({
                center: {
                    "latitude": location?.coords.latitude ?? 0,
                    "longitude": location?.coords.longitude ?? 0
                },
                zoom: 14
            },{ duration: 500 })
        
            setTimeout(() => { setMapReady(true) }, 1000);
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
            onRegionChangeComplete={(region) => { isMapReady ? onRegionChanged(region) : {}}}
        >
            {points &&
                points.map((report: UserReport, index: number) => (
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