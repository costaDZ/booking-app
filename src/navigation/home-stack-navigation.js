import React from "react";
import { HomeScreen, DetailsScreen } from "../screens";


import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();



export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >

            <Stack.Screen
                name="home-stack"
                component={HomeScreen}
            />

            <Stack.Screen
                name="details"
                component={DetailsScreen}
            />

        </Stack.Navigator>
    );
}

