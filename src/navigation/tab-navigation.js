import React from "react";
import { homeNavigationOptions, SearchScreen, FavoriteScreen } from "../screens";


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyDrawer from "./drawer-navigation";




import HomeStack from "./home-stack-navigation";


import { Text, TouchableOpacity, Button } from 'react-native';


const Tab = createBottomTabNavigator();




export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >

            <Tab.Screen
                name="home"
                component={HomeStack}
                options={homeNavigationOptions}
            />


            <Tab.Screen
                name="search"
                component={SearchScreen}

            />
            <Tab.Screen
                name="favorie"
                component={FavoriteScreen}
            />


            <Tab.Screen
                name="drawer"
                component={DrawerToggler}
                options={({ navigation }) => ({
                    tabBarButton: props => <TouchableOpacity {...props}>
                        < DrawerButton nav={navigation} />
                    </TouchableOpacity>,
                })}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                    }
                }}
            />


        </Tab.Navigator>
    );
}

const DrawerToggler = () => null;

const DrawerButton = ({ nav }) => {
    console.log(nav);
    return (
        <Button
            title="drawer"
            onPress={() => nav.openDrawer()}
        />
    )
};
