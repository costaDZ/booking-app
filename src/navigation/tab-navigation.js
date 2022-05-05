import React from "react";
import {
    homeNavigationOptions,
    SearchScreen,
    searchNavigationOptions,
    FavoriteScreen,
    favoriteNavigationOptions
} from "../screens";


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyDrawer from "./drawer-navigation";




import HomeStack from "./home-stack-navigation";


import { Text, TouchableOpacity, Button } from 'react-native';

import { COLORS } from "../constants/theme";



import Icon from 'react-native-vector-icons/MaterialIcons';

// export const favoriteNavigationOptions = {
//     tabBarIcon: ({ color, size }) => (
//         <Icon name="menu" size={30} color={color} />
//     ),
//     tabBarActiveTintColor: "#fff",
// };


const Tab = createBottomTabNavigator();




export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: COLORS.secondary,
                }
            }
            }
        >

            <Tab.Screen
                name="home"
                component={HomeStack}
                options={homeNavigationOptions}
            />


            <Tab.Screen
                name="search"
                component={SearchScreen}
                options={searchNavigationOptions}

            />
            <Tab.Screen
                name="favorie"
                component={FavoriteScreen}
                options={favoriteNavigationOptions}
            />


            <Tab.Screen
                name="drawer"
                component={DrawerToggler}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="menu"
                            size={30}
                            color={color}
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                    tabBarActiveTintColor: "#fff",
                })}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                    }
                }}
            />
        </ Tab.Navigator>
    );
}

const DrawerToggler = () => null;

// const DrawerButton = ({ nav }) => {
//     console.log(nav);
//     return (
//         <Icon name="menu" size={30} onPress={() => nav.openDrawer()} />
//     )
// };
