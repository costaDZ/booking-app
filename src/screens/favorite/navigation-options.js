import React from "react";
import { Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export const favoriteNavigationOptions = {
    tabBarIcon: ({ color, size }) => (
        <Icon name="collections-bookmark" size={30} color={color} />
    ),
    tabBarActiveTintColor: "#fff",
};