import { useEffect, useState } from "react";
import { StyleProp, ToastAndroid, View, ViewStyle } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from 'expo-location';
import React from "react";
import { ReportService } from "../../../../services/report/ReportService";
import { Text } from "react-native-paper";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

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
    const [markers, setMarkers] = useState<UserReport[]>([]);

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
        points?.map((report: UserReport, index: number) => {
            console.log(report.latitude);
            console.log(report.longitude);
        })
        setMarkers(points ?? [])
    }, [points])

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
            showsPointsOfInterest = {false}
            onRegionChangeComplete={(region) => { isMapReady ? onRegionChanged(region) : {}}}
        >
            {/* {markers.map((marker, index) => (
                <Marker
                    key={index}
                    coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                    title={marker.nomeCategoria}
                    description={marker.emailUser}
                    />
            ))} */}

            {/* <Marker
            key={1}
                        coordinate={{latitude: 1, longitude: 1}}
                        title={"asas"}
                    /> */}
            {points &&
                points.map((report: UserReport, index: number) => {
                    console.log("_______" + report.latitude);
                    return <Marker
                        key={index}
                        coordinate={{
                            latitude: Number(report.latitude),
                            longitude: Number(report.longitude)
                        }}
                        title={report.nomeCategoria}
                        onSelect={() => { onReportSelected(report) }}
                        onDeselect={() => { onReportSelected(null) }}
                    />
})
            }
        </MapView>
    );
}