import React from 'react';
import {Text, TouchableOpacity, Button, Image} from 'react-native';

import {
  homeNavigationOptions,
  SearchScreen,
  searchNavigationOptions,
  FavoriteScreen,
  favoriteNavigationOptions,
} from '../screens';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MyDrawer from './drawer-navigation';

import HomeStack from './home-stack-navigation';
import {COLORS, icons} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.secondary,
        },
        tabBarIcon: ({focused, color, size}) => {
          const tintColor = focused ? COLORS.white : COLORS.lightGray;
          switch (route.name) {
            case 'home':
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case 'search':
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case 'notification':
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case 'menu':
              return (
                <Icon
                  name="menu"
                  size={30}
                  color={COLORS.primary}
                  onPress={() => navigation.openDrawer()}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="home" component={HomeStack} />

      <Tab.Screen name="search" component={SearchScreen} />
      <Tab.Screen name="notification" component={FavoriteScreen} />
      <Tab.Screen
        name="menu"
        component={DrawerToggler}
        listeners={{
          tabPress: e => e.preventDefault(),
        }}
      />
    </Tab.Navigator>
  );
}

const DrawerToggler = () => null;

// const DrawerButton = ({ nav }) => {
//     console.log(nav);
//     return (
//         <Icon name="menu" size={30} onPress={() => nav.openDrawer()} />
//     )
// };
