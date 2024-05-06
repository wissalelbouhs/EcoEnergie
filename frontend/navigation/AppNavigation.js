import { View,Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import SignUpScreen from "../screens/SignUpScreen.js";
import LoadingScreen from "../screens/loading.js";
import Navbar from "../navigation/Navbar.js";
import InfoPS from "../screens/InfoPS.js";
import InfoBatt from "../screens/InfoBatt.js";
import Drawer from "./Drawer.js";
import Couts from "../screens/Couts.js";
import Benifices from "../screens/Benifices.js";
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
                <Stack.Screen name="InfoPs" options={{headarShown: false}} component={InfoPS}/>
                <Stack.Screen name="InfoBatt" options={{headarShown: false}} component={InfoBatt}/>
                {/* <Stack.Screen name="Drawer" options={{headarShown: false}} component={Drawer}/>
                <Stack.Screen name="Cout" options={{headarShown: false}} component={Couts}/>
                <Stack.Screen name="Benifice" options={{headarShown: false}} component={Benifices}/> */}
               
            </Stack.Navigator>
       </NavigationContainer>
    )
}