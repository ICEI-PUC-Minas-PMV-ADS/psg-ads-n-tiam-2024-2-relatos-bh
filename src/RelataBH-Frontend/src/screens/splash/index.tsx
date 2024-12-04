import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { Animated, Easing, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackTypes } from '../../routes/routes';
import { TokenService } from '../../services/TokenService';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export const AppSplashScreen: React.FC = () => {
    const animationProgress = useRef(new Animated.Value(0));
    const rootNavigation = useNavigation<RootStackTypes>();

    const animation = useRef<LottieView>(null);

    useEffect(() => {
        animation.current?.play();
    },[]);

    const handleAuthentication = async () => {
        const isAuthenticated = await TokenService.isAuthenticated();
        isAuthenticated ? rootNavigation.replace("Home") : rootNavigation.replace("Auth");
    }

    useEffect(() => {
        Animated.timing(animationProgress.current, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();

        animationProgress.current.addListener((progress) => {
            if(progress.value == 1){
                handleAuthentication();
            }
        })
      }, []);

    return(
        <View style={{flex: 1}}>
            <AnimatedLottieView 
                progress={animationProgress.current}
                source={require("../../../assets/splash-animation.json")}
                style={{
                    flex: 1,
                    justifyContent: 'center'
                  }}
            />
        </View>
    );
}