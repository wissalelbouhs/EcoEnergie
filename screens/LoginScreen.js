import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
// import axios from 'axios';

export default function LoginScreen() {
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState(""); 
    const navigation = useNavigation();
    // function handleLogin(){
    //     // axios.post()
    // }

    return (
        
        <View style={{ flex: 1, backgroundColor: '#5784BA', borderTopLeftRadius: 0, borderTopRightRadius: 9000, borderBottomLeftRadius: 1000 }}>
            <SafeAreaView style={{ flex: 1 }}>
                
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginLeft: 10 }}>
                        <ArrowLeftIcon size={20} color="#5784BA" />
                    </TouchableOpacity>
                    </View>
                    <View>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 50, textAlign: 'center', marginTop: 80, marginBottom: 20 ,marginLeft:10}}>Login...</Text>
                    </View>
            </SafeAreaView>
            
            <View style={{ flex: 1, backgroundColor: '#5784BA', paddingHorizontal: 20, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
            
                <View style={{ marginTop: 20 }}>
                
                    <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: -25, marginTop: -100, fontSize: 20 }}>Email Address</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: 'transparent', color: 'white', borderWidth: 0 }}
                        onChangeText={(e)=>setEmail(e)}
                    />
                    <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: -25, marginTop: 25, fontSize: 20 }}>Password</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: 'transparent', color: 'white', borderWidth: 0 }}
                        secureTextEntry
                        onChangeText={(e)=>setPassword(e)}
                       
                    />
                    <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginBottom: 40, marginTop: 40 }}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=> navigation.navigate("Navbar")}
                        style={{ backgroundColor: 'white', paddingVertical: 15, borderRadius: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5784BA', textAlign: 'center' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
       
    );
}
