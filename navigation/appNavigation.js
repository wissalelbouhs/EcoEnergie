import { View,Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoadingScreen from "../screens/loading";
import Navbar from "../screens/Navbar.js";
import InfoPS from "../screens/InfoPS.js";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return(
       <NavigationContainer>
            <Stack.Navigator initialRouteName="loading" screenOptions={{headerShown:false}}>
                <Stack.Screen name="loading" options={{headerShown:false}} component={LoadingScreen}/>
                <Stack.Screen name="Welcome" options={{headarShown: false}} component={WelcomeScreen}/>
                <Stack.Screen name="login" options={{headarShown: false}} component={LoginScreen}/>
                <Stack.Screen name="SignUp" options={{headarShown: false}} component={SignUpScreen}/>
                <Stack.Screen name="Navbar" options={{headarShown: false}} component={Navbar}/>
                <Stack.Screen name="InfoPS" options={{headarShown: false}} component={InfoPS}/>
            </Stack.Navigator>
       </NavigationContainer>
    )
}