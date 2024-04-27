import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//screens
import HomeScreen from "./HomeScreen.js";
import BatteriesScreen from "./BatteriesScreen";
import PanneauSolaireScreen from "./PanneauSolaireScreen";
import ProfileScreen from "./ProfileScreen";

const homename = "Home";
const BatteriesName = "Settings";
const ProfileName = "Profile";
const PSName = "Solar Pannel";


const tab = createBottomTabNavigator();

export default function Navbar() {
    return (
        <tab.Navigator
            initialRouteName={homename}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === homename) {
                        iconName = "home";
                    } else if (rn === ProfileName) {
                        iconName = "person";
                    } else if (rn === BatteriesName) {
                        return <FontAwesome5 name="battery-full" size={30} color={color} />;
                    } else if (rn === PSName) {
                        return <FontAwesome5 name="solar-panel" size={25} color={color} />;
                    }
                    return <Ionicons name={iconName} size={30} color={color} />;
                },
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.85)", // Example background color with opacity
                    overflow: "hidden",
                },
            })}
            >
            <tab.Screen
                name={homename}
                component={HomeScreen}
                options={{ tabBarShowLabel: false }}
            />
            <tab.Screen
                name={ProfileName}
                component={ProfileScreen}
                options={{ tabBarShowLabel: false }}
            />
            <tab.Screen
                name={PSName}
                component={PanneauSolaireScreen}
                options={{ tabBarShowLabel: false }}
            />
            <tab.Screen
                name={BatteriesName}
                component={BatteriesScreen}
                options={{ tabBarShowLabel: false }}
            />
        </tab.Navigator>
    );
}