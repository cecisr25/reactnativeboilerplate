import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';

import HomeScreen from './src/screens/Home';
import SettingsScreen from './src/screens/Settings';
import ItemsScreen from './src/screens/Items';
import IScreen from './src/screens/IScreen';


const Tab = createBottomTabNavigator();

const screens: IScreen[] = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'ios-home',
    iconSize: 32,
  },
  {
    name: 'Items',
    component: ItemsScreen,
    icon: 'ios-list',
    iconSize: 32,
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    icon: 'ios-settings',
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
