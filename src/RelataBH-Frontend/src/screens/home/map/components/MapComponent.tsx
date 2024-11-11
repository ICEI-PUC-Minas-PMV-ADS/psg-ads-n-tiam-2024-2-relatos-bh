import { useEffect, useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from 'expo-location';
import React from "react";

type Props = {
    reports: UserReport[] | null,
    onReportSelected: (report: UserReport | null) => void,
    onRegionChanged: (region: Region) => void,
    style?: StyleProp<ViewStyle>
}

export const MapComponent: React.FC<Props> = ({
    style,
    onReportSelected,
    onRegionChanged,
    reports
}) => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const mapRef: React.LegacyRef<MapView> | undefined = React.createRef();

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
            {reports &&
                reports.map((report: UserReport, index: number) => (
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