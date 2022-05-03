import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import HomeStack from './home-stack-navigation';
import TabNavigation from './tab-navigation';

import { NavigationContainer } from '@react-navigation/native';


export default function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Drawer.Screen name="tab" component={TabNavigation} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}