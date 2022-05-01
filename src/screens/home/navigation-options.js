import React from "react";
import { Text } from "react-native";



export const homeNavigationOptions = {
    tabBarLabel: 'Homsse',
    tabBarIcon: ({ color, size }) => (
        <Text style={{ fontSize: size }}>🏠</Text>
    )
};