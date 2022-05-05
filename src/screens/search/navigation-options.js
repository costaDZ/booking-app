import React from "react";
import { Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const searchNavigationOptions = {
    tabBarIcon: ({ color, size }) => (
        <Icon name="search" size={30} color={color} />
    ),
    tabBarActiveTintColor: "#fff",
};