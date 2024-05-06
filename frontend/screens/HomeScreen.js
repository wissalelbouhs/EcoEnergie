import { View, Text, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'

export default function HomeScreen() {
  const [tdProduction,setTdProduction] = useState();
  const [bCapacity,setBCapacity] = useState();
  const [bConsumption,setBConsumption] = useState();
  const [pConsumption,setPConsumption] = useState();
  const [avg,setAvg] = useState();
  async function handelProductionTD(){
    await axios.get("http://192.168.28.251:3000/productions/report/solarpanels/day").then((res)=>{
      if(res.status==200){
        setTdProduction(res.data.sumProductionForAllSolarPanels);
        // console.log(tdProduction);
      }
    })
  }
  async function handelConsommationPanel(){
    await axios.get("http://192.168.28.251:3000/consommations/report/solarpanels/day").then((res)=>{
      if(res.status==200){
        setPConsumption(res.data.sumConsumptionForSolarPanels);
        // console.log(pConsumption);
      }
    })
  }
  async function handelBattryCapcity(){
    await axios.get("http://192.168.28.251:3000/productions/report/solarpanels/day").then((res)=>{
      if(res.status==200){
        setBCapacity(res.data.sumProductionForAllSolarPanels);
      }
    })
  }
  async function handelBattryConsommation(){
    await axios.get("http://192.168.28.251:3000/consommations/report/battries/day").then((res)=>{
      if(res.status==200){
        setBConsumption(res.data.sumConsumptionForBattries);
        // console.log(bConsumption);
      }
    })
  }
  async function handleAvg(){
    await axios.get("http://192.168.28.251:3000/productions/report/solarpanels/avg/day").then((res)=>{
      if(res.status==200){
        setAvg(res.data.avgProductionForAllSolarPanels);
      }
    })
  }
  useEffect(()=>{
    handleAvg();
    handelProductionTD();
    handelBattryCapcity();
    handelBattryConsommation();
    handelConsommationPanel();
  },[])
  return (
    <View>
      <StatusBar backgroundColor="#3E65F9" />
      <View style={{ backgroundColor: 'white', elevation: 6, marginBottom: 5, paddingVertical: 10 }}>
        <Image source={require("../assets/cercle.gif")} style={{ height: 300, width: 300, alignSelf: 'center' }} />
        <Text style={{ position: 'absolute',top:150, alignSelf: 'center', fontWeight: 'bold', fontSize: 30 }}>{tdProduction} kW</Text>
        <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 30, color: '#3E65F9', bottom: 20 }}>Today's Production</Text>
      </View>
      <View style={{ display: "flex", flexDirection: 'row' }}>
        <View style={{ backgroundColor: "white", elevation: 6, flex: 1, margin: 5, padding: 25 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{bCapacity}</Text>
          <View style={{ position: 'absolute', alignSelf: "flex-end", marginVertical: '36%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: 'bold' }}>kW</Text>
            <FontAwesome name="battery-full" size={20} style={{ marginRight: 10 }} color="grey" />
          </View>
          <Text style={{ color: 'gray' }}>Batteries       Capacity</Text>
        </View>
        <View style={{ backgroundColor: "white", elevation: 6, flex: 1, margin: 5, padding: 25 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{bConsumption}</Text>
          <View style={{ position: 'absolute', alignSelf: "flex-end", marginVertical: '36%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: 'bold' }}>kW</Text>
            <FontAwesome name="battery-quarter" size={20} style={{ marginRight: 10 }} color="grey" />
          </View>
          <Text style={{ color: 'gray' }}> Batteries Consumption</Text>
        </View>
      </View>
      <View style={{ display: "flex", flexDirection: 'row' }}>
        <View style={{ backgroundColor: "white", elevation: 6, flex: 1, margin: 5, padding: 25 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{pConsumption}</Text>
          <View style={{ position: 'absolute', alignSelf: "flex-end", marginVertical: '36%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: 'bold' }}>kW</Text>
            <MaterialIcons color="grey" name='solar-power' style={{ marginRight: 10 }} size={25} />
          </View>
          <Text style={{ color: 'gray' }}>Pannel's Consumption</Text>
        </View>
        <View style={{ backgroundColor: "white", elevation: 6, flex: 1, margin: 5, padding: 25 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{avg}</Text>
          <View style={{ position: 'absolute', alignSelf: "flex-end", marginVertical: '36%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: 'bold' }}>kW</Text>
            <MaterialCommunityIcons color="grey" name='solar-panel' style={{ marginRight: 10 }} size={25} />
          </View>
          <Text style={{ color: 'gray' }}>Average</Text>
        </View>
      </View>
    </View>
  )
}