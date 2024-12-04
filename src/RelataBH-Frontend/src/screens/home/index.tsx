import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { BottomNavigation, TouchableRipple } from 'react-native-paper';
import MapScreen from './map/MapScreen';
import  ProfileScreen  from './profile';
import { ReportScreen } from './report';

const MapRoute = () => <MapScreen />;

const ReportRoute = () => <ReportScreen/>

const ProfileRoute = () => <ProfileScreen />;

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
    
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <BottomNavigation
                key={index}
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                renderTouchable={({key, ...props}) => (<TouchableRipple key={key} {...props} />)}
            />
        </SafeAreaView>
    );
}

export default HomeScreen;