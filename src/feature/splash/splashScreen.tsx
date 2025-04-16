import React, {memo, useEffect, useRef} from 'react';
import {View} from 'react-native';
import {useAppNavigation} from '../../shared';
import tw from 'twrnc';
import LottieView from 'lottie-react-native';
import {HelloAnimation} from '../../assets';

export const SplashScreen = memo(() => {
  const {navigation} = useAppNavigation<'Splash'>();
  const animationRef = useRef<LottieView>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <LottieView
        ref={animationRef}
        source={HelloAnimation}
        autoPlay
        style={tw`w-100 h-50`}
        speed={1.5}
      />
    </View>
  );
});
