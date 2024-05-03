import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import Carousel from '../components/Carousel'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function HomeScreen() {
  return (
    <View>
      <StatusBar backgroundColor="#3E65F9" />
      <View style={{ backgroundColor: 'white', elevation: 6,marginBottom:5 ,paddingVertical: 25 }}>
        <Image source={require("../assets/cercle.gif")} style={{ height: 300, width: 300, alignSelf: 'center' }} />
        <Text style={{ position: 'absolute', top: 140, alignSelf: 'center', fontWeight: 'bold', fontSize: 30 }}>2,062 w</Text>
        <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 30, color: '#3E65F9', bottom: 20 }}>Today's Production</Text>
      </View>
      <View style={{ display: "flex", flexDirection: 'row' }}>
        <View style={{ backgroundColor: "white", elevation: 6, flex: 1, margin: 5, padding: 25 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>7.12</Text>
          <View style={{ position: 'absolute', alignSelf: "flex-end", marginVertical: '36%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: 'bold' }}>kW</Text>
            <MaterialIcons color="grey" name='solar-power' style={{ marginRight: 10 }} size={25} />
          </View>
          <Text style={{ color: 'gray' }}>Capacity</Text>
        </View>
        <View style={{ backgroundColor: "white", elevation: 6, flex: 1, margin: 5, padding: 25 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>7.12</Text>
          <View style={{ position: 'absolute', alignSelf: "flex-end", marginVertical: '36%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: 'bold' }}>kW</Text>
            <MaterialIcons color="grey" name='solar-power' style={{ marginRight: 10 }} size={25} />
          </View>
          <Text style={{ color: 'gray' }}>Capacity</Text>
        </View>
      </View>
      <View style={{ display: "flex", flexDirection: 'row' }}>
        <View style={{ backgroundColor: "white", elevation: 6, flex: 1, margin: 5, padding: 25 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>7.12</Text>
          <View style={{ position: 'absolute', alignSelf: "flex-end", marginVertical: '36%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: 'bold' }}>kW</Text>
            <MaterialIcons color="grey" name='solar-power' style={{ marginRight: 10 }} size={25} />
          </View>
          <Text style={{ color: 'gray' }}>Capacity</Text>
        </View>
        <View style={{ backgroundColor: "white", elevation: 6, flex: 1, margin: 5, padding: 25 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>7.12</Text>
          <View style={{ position: 'absolute', alignSelf: "flex-end", marginVertical: '36%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: 'bold' }}>kW</Text>
            <MaterialIcons color="grey" name='solar-power' style={{ marginRight: 10 }} size={25} />
          </View>
          <Text style={{ color: 'gray' }}>Capacity</Text>
        </View>
      </View>
    </View>
  )
}