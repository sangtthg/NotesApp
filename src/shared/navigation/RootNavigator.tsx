import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppBottomBar, SplashScreen} from '../../feature';

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={AppBottomBar} />
    </Stack.Navigator>
  );
};
