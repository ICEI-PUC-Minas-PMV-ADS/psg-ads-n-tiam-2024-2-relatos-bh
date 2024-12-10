import { useEffect, useState } from "react";
import { Platform, StyleProp, ToastAndroid, View, ViewStyle } from "react-native";
import MapView, { Marker, Region, PROVIDER_GOOGLE, PROVIDER_DEFAULT, MapMarker } from "react-native-maps";
import * as Location from 'expo-location';
import React from "react";
import { IconButton } from "react-native-paper";

type Props = {
    onReportSelected: (report: UserReport | null) => void,
    onRegionChanged: (region: Region) => void,
    searchOnUserLocation: (latitude: number, longitude: number) => void,
    points: UserReport[] | null,
    style?: StyleProp<ViewStyle>
}

export const MapComponent: React.FC<Props> = ({
    style,
    points,
    onReportSelected,
    onRegionChanged,
    searchOnUserLocation
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

        setTimeout(() => {
            if (mapRef.current) {
                mapRef.current.fitToSuppliedMarkers(
                    markers.map(({ id }) => String(id)), 
                    {
                    edgePadding: {
                        top: 150,
                        right: 50,
                        bottom: 50,
                        left: 50,
                      }
                });
            }
        }, 1000);

    }, [points])

    useEffect(() => {
        if (location != null || location != undefined) {
            centralize();
            setTimeout(() => {
                setMapReady(true);
                searchOnUserLocation(location.coords.latitude, location.coords.longitude);
            }, 1000);
        }
    }, [location]);

    const centralize = () => {
        mapRef.current?.animateCamera({
            center: {
                "latitude": location?.coords.latitude ?? 0,
                "longitude": location?.coords.longitude ?? 0
            },
            zoom: 14
        }, { duration: 500 })
    }

    return (
        <View style={style}>
            <MapView
                provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                style={{ width: '100%', height: '100%' }}
                ref={mapRef}
                initialRegion={undefined}
                showsUserLocation={true}
                rotateEnabled={false}
                showsMyLocationButton={false}
                showsCompass={false}
                pitchEnabled={false}
                showsPointsOfInterest={false}
                onRegionChangeComplete={(region) => { isMapReady ? onRegionChanged(region) : {} }}
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

            <View style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'white', borderRadius: 50, margin: 12, zIndex: 1 }}>
                <IconButton icon={'crosshairs-gps'} onPress={() => { centralize() }} />
            </View>
        </View>
    );
}