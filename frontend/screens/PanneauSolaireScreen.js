import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList, GestureHandlerRootView } from 'react-native';
import SolarPanel from '../components/SolarPanel';

export default function PanneauSolaireScreen() {
    const [solarPanels, setSolarPanels] = useState("");
    async function getSolarPanels() {
        await axios.get("http://192.168.28.251:3000/solar-panels")
            .then((res) => {
                setSolarPanels(res.data);
            })
    }
    useEffect(() => {
        getSolarPanels();
        console.log(solarPanels);
    }, [])
    return (
        <FlatList
            data={solarPanels}
            renderItem={({item})=><SolarPanel item={item}/>}
        />
    )
}