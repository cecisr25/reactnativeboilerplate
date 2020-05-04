import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';

import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import IScreen from './screens/IScreen';

const Tab = createBottomTabNavigator();

const screens: IScreen[] = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'ios-home',
    iconSize: 32,
  },
  {
    name: 'Example',
    component: SettingsScreen,
    icon: 'ios-time',
    iconSize: 32,
  },
];

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({ route }: any) => ({
            tabBarIcon: () => {
              const name = _.get(route, 'name', false);
              const focusedScreen: IScreen = _.find(screens, { name }) as IScreen;
              return <Ionicons name={focusedScreen.icon} size={focusedScreen.iconSize}/>;
            },
          })
        }>
        {
          _.map(screens,(tab, id) => {
            return (
              <Tab.Screen
                name={tab.name}
                component={tab.component}
                key={id}
              />
            )
          })
        }
      </Tab.Navigator>
    </NavigationContainer>
  );
}
