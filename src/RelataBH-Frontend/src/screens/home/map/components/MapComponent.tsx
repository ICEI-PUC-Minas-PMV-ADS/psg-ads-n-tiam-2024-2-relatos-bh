import { useEffect, useState } from "react";
import { Platform, StyleProp, ToastAndroid, View, ViewStyle } from "react-native";
import MapView, { Marker, Region, PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import * as Location from 'expo-location';
import React from "react";

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
        setMarkers(points ?? []);
        if(mapRef.current){
            mapRef.current.fitToSuppliedMarkers(markers.map(({ id }) => String(id)));
        }
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
            provider={ Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT }
            style={style}
            ref={mapRef}
            initialRegion={undefined}
            showsUserLocation={true}
            rotateEnabled={false}
            showsMyLocationButton={false}
            showsCompass={false}
            pitchEnabled={false}
            showsPointsOfInterest = {false}
            onRegionChangeComplete={(region) => { isMapReady ? onRegionChanged(region) : {}}}
        >
            {points &&
                points.map((report: UserReport, index: number) => {
                    return <Marker
                        key={String(report.id)}
                        identifier={String(report.id)}
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