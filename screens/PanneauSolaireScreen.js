import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList, GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import SolarPanel from '../components/SolarPanel';

export default function PanneauSolaireScreen() {
    const [solarPanels, setSolarPanels] = useState();
    function getSolarPanels() {
        axios.get("http://10.0.2.2:3000/solar-panels")
            .then((res) => {
                setSolarPanels(res.data);
            })
    }
    useEffect(() => {
        getSolarPanels();
    }, [])
    return (
        <GestureHandlerRootView>
            <FlatList
                data={solarPanels}
                renderItem={({ item }) => <SolarPanel item={item} />}
            />
        </GestureHandlerRootView>
    )
}