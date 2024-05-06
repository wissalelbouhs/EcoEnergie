import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoadingScreen({ navigation }) {
  setTimeout(async() => {
    let token = await AsyncStorage.getItem("token");
    if (token){
      navigation.replace("Navbar");
    }else{
      navigation.replace("Welcome");
    }
  }, 5000);
  return (
    <View style={styles.view}>
      <StatusBar style={styles.statusbar} hidden={false} />
      <Image style={{ width: 250, height: 150 }} source={require("../assets/gold.jpg")} />
      <Text style={styles.text}>EcoEnergie</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  statusbar: {

  },
  view: {
    width: '100%',
    height: "100%",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: '#fffbcc',
    fontWeight:'bold'
    
  }
})