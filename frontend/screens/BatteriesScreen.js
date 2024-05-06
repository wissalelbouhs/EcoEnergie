import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, GestureHandlerRootView } from 'react-native';
import axios from 'axios'
import Battries from '../components/Battries';


export default function BatteriesScreen() {
  const [Battrie,setBattrie]= useState("");
  async function getBattrie(){
    await axios.get("http://192.168.27.1:3000/batteries/").then((res) => {
      setBattrie(res.data);
      
    })
  }
  useEffect(()=>{
     getBattrie();
     console.log(Battrie);
  },[])
  return (
    <FlatList
        data={Battrie}
        renderItem={({item})=> <Battries  item ={item}/>}
    />
  )
}