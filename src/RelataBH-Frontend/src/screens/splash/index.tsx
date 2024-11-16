import LottieView from 'lottie-react-native';
import { useContext, useEffect, useRef } from 'react';
import { Animated, Easing, View, Text } from 'react-native';
import AppContext from '../../context/app';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export const AppSplashScreen: React.FC = () => {
    const { updateSplashRunning } = useContext(AppContext);
    const animationProgress = useRef(new Animated.Value(0));

    const animation = useRef<LottieView>(null);
    useEffect(() => {
        animation.current?.play();
    },[]);

    useEffect(() => {
        Animated.timing(animationProgress.current, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();

        animationProgress.current.addListener((progress) => {
            if(progress.value == 1){
                updateSplashRunning(false)
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