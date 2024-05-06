import { View, Text, Pressable } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



function fromatDate(dataString) {
    let date = new Date(dataString);
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

export default function InfoPS({ route }) {
    const navigation = useNavigation();
    async function supprimer(item) {
        let id = item.id;
        console.log(id);
        await axios.delete("http://192.168.28.251:3000/solar-panel/", { params: { id: id } }).then((res) => {
            console.log(res);
            navigation.goBack();
        }).catch((error) => {
            console.error("Error deleting solar panel:", error);
        });
    }
    
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
                <FontAwesome5 name='edit' size={30} color="blue" />
            </Pressable>
            <Pressable onPress={() => { supprimer(item) }}>
                <FontAwesome5 name='trash-alt' size={30} color="red" />
            </Pressable>
        </View>
    )
}