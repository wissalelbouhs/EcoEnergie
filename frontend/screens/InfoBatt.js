import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function InfoBatt({route}) {
  const navigation= useNavigation();
  async function supprimer(item) {
    let id = item.id;
    console.log(id);
    await axios.delete("http://192.168.27.1:3000/batteries/", { params: { id: id } }).then((res) => {
        console.log(res);
        navigation.goBack();
    }).catch((error) => {
        console.error("Error deleting solar panel:", error);
    });
}
 const { item } = route.params;
     
  
  return (
    <View>
            <Text>{item.capacity}</Text>
            <Text>{item.etat}</Text>
            <Text>{item.model}</Text>
            <Pressable >
                <FontAwesome5 name='edit' size={30} color="blue" />
            </Pressable>
            <Pressable onPress={() => { supprimer(item) }}>
                <FontAwesome5 name='trash-alt' size={30} color="red" />
            </Pressable>
    </View>
  )
}