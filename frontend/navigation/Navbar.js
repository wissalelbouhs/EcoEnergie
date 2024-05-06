import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//screens
import HomeScreen from "../screens/HomeScreen.js";
import BatteriesScreen from "../screens/BatteriesScreen.js";
import PanneauSolaireScreen from "../screens/PanneauSolaireScreen.js";
import ChartScreen from "../screens/ChartScreen.js";

const homename = "Home";
const BatteriesName = "Batteries";
const ChartName = "Chart";
const PSName = "Solar Pannels";


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
                    } else if (rn === ChartName) {
                        return <MaterialCommunityIcons name='chart-line' size={32} color={color}/>
                    } else if (rn === BatteriesName) {
                        return <FontAwesome5 name="battery-full" size={30} color={color} />;
                    } else if (rn === PSName) {
                        return <FontAwesome5 name="solar-panel" size={25} color={color} />;
                    }
                    return <Ionicons name={iconName} size={30} color={color} />;
                },
                // headerShown: false,
                headerTitleAlign:"center",
                headerTintColor:"white",
                headerStyle:{
                    backgroundColor:'#3E65F9'
                },
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
                name={ChartName}
                component={ChartScreen}
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