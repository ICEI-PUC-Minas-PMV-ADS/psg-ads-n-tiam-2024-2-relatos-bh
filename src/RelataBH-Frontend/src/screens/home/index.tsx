import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import MapScreen from './map/MapScreen';
import Report from './Report/Report';

const MapRoute = () => <MapScreen/>;

const ReportRoute = () => <Report/>

const ProfileRoute = () => <Text>Profile</Text>;

const HomeScreen: React.FC = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'map', title: 'Mapa', focusedIcon: 'map', unfocusedIcon: 'map-outline' },
        { key: 'report', title: 'Relatar', focusedIcon: 'plus-circle', unfocusedIcon: 'plus-circle-outline' },
        { key: 'profile', title: 'Perfil', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        map: MapRoute,
        report: ReportRoute,
        profile: ProfileRoute,
    });

    return (<SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
        <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
    </SafeAreaView>
    );
}

export default HomeScreen;