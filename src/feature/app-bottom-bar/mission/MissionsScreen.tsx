import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

export const MissionsScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-xl text-gray-800`}>
        This is a demo screen for Missions
      </Text>
    </View>
  );
};
