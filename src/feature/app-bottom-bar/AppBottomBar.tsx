import React from 'react';
// import {useAppNavigation} from '../../shared';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {NotesScreen} from './notes';
import {MissionsScreen} from './mission';
import {CheckedSvg, NoteSvg} from '../../assets/svg';
type TabBar = 'Notes' | 'Missions';
const IconTabBar = (tab: TabBar, focused: boolean) => {
  switch (tab) {
    case 'Notes':
      return (
        <CheckedSvg width={24} height={24} fill={focused ? '#000' : '#ccc'} />
      );
    case 'Missions':
      return (
        <NoteSvg width={24} height={24} fill={focused ? '#000' : '#ccc'} />
      );
  }
};

export function AppBottomBar() {
  // const {navigation} = useAppNavigation<'Home'>();
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      overScrollMode={'always'}
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarIndicatorStyle: {height: 0},
        tabBarStyle: {
          backgroundColor: 'white',
          paddingBottom: 12,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        },
      }}>
      <Tab.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          swipeEnabled: true,
          tabBarIndicator: undefined,
          tabBarIcon: ({focused}) => IconTabBar('Notes', focused),
        }}
      />
      <Tab.Screen
        name="Missions"
        component={MissionsScreen}
        options={{
          swipeEnabled: true,
          tabBarIcon: ({focused}) => IconTabBar('Missions', focused),
        }}
      />
    </Tab.Navigator>
  );
}
