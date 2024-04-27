import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function WelcomeScreen() {
    const navigation = useNavigation();
    
    return (
        <View style={{ flex: 1, backgroundColor: 'white', zIndex: -2, isolation: "isolate" }}>
            <ImageBackground
                source={require('../assets/panneau.jpg')}
                style={styles.imageBackground}
            >
                <View style={{ flex: 1,  paddingTop: 325,alignItems:'center',justifyContent:'center' ,gap:10}}>
                    <Text style={{ marginLeft:-200,marginTop:-400,fontStyle:'italic',color: '#004792', fontSize: 32, textAlign: 'center' }}>
                        Let's 
                    </Text>
                    <Text style={{ marginLeft:-80,fontStyle:'italic',color: '#004792',fontSize: 32, textAlign: 'center' }}>
                        save
                    </Text>
                    <Text style={{ marginLeft:60,fontStyle:'italic',color: '#004792', fontSize: 32, textAlign: 'center' }}>
                        the world 
                    </Text>
                    <Text style={{ marginLeft:200,fontStyle:'italic',color: '#004792', fontSize: 32,  textAlign: 'center' }}>
                        together !
                    </Text>

                </View>
            </ImageBackground>
            <View style={{ alignItems: 'center' }}>
                {/* Other components */}
            </View>
            <View style={{ marginHorizontal: 3 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={{ backgroundColor: '#82CEF9', borderRadius: 20, paddingVertical: 10,paddingHorizontal:30, marginBottom: 5,margin:50}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#004792' }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={{ color: '#82CEF9', fontWeight: 'bold', marginBottom: 25 }}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width,
        height,
        zIndex: -1,
        resizeMode: 'cover', 
        justifyContent: 'center',
    }
});
