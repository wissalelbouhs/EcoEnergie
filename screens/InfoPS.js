import { View, Text, Pressable } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from 'axios';



function fromatDate(dataString) {
    let date = new Date(dataString);
    return date.getDate() + "/" + (date.getMonth() + 1 )+ "/" + date.getFullYear();
}
function supprimer(item){
    let id = item.id;
    // axios.delete("http://10.0.2.2:3000/solar-panel/",{params:id}).then((res)=>{
    //     console.log(res.message);
    // })
}

export default function InfoPS({ route }) {
    const { item } = route.params;
    return (
        <View>
            <Text>model: {item.marque}</Text>
            <Text>{item.capacity}</Text>
            <Text>{item.etat}</Text>
            <Text>{item.model}</Text>
            <Text>{item.efficiency}</Text>
            <Text>{item.width}</Text>
            <Text>{item.height}</Text>
            <Text>{fromatDate(item.installationDate)}</Text>
            <Pressable >
                <FontAwesome5 name='edit' size={30} color="blue"/>
            </Pressable>
            <Pressable onPress={()=>{supprimer(item)}}>
                <FontAwesome5 name='trash-alt' size={30} color="red"/>
            </Pressable>
        </View>
    )
}