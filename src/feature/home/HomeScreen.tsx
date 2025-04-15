import React from 'react';
import {View, Text, Button} from 'react-native';
import tw from 'twrnc';
import {useAppNavigation} from '../../shared';
export function HomeScreen() {
  const {navigation} = useAppNavigation<'Home'>();

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg mb-4`}>🏠 Home Screen</Text>
      <Button title="Go to Splash Screen" onPress={() => navigation.pop()} />
    </View>
  );
}
