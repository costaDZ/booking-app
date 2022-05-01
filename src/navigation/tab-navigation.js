import React from "react";
import { homeNavigationOptions, SearchScreen } from "../screens";


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text } from 'react-native';


const Tab = createBottomTabNavigator();


import HomeStack from "./home-stack-navigation";


export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={
                    {
                        headerShown: false
                    }
                }
            >

                <Tab.Screen
                    name="home"
                    component={HomeStack}
                    options={homeNavigationOptions}
                />


                <Tab.Screen name="search" component={SearchScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

