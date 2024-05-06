import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState();
    const navigation = useNavigation();

    async function handleLogin() {
        console.log(email,password);
        console.log("login");
        await axios.post("http://192.168.28.251:3000/users/login", { email, password }).then(async (res) => {
            if(res.status == 201){
                console.log(res.data);
                await AsyncStorage.setItem("token",res.data.userId.email),
                navigation.replace("Navbar");
            }else{
                setError("Incorrect email or password");
            }
        }).catch((e)=>{
            console.log(e);
            setError("Incorrect email or password");
        })
    }
    useEffect(()=>{
        async function handleToken(){
            let token = await AsyncStorage.getItem("token");
            if(token){
                navigation.replace("Navbar");
            }
        }
        handleToken();
    },[])

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
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 50, textAlign: 'center', marginTop: 80, marginBottom: 20, marginLeft: 10 }}>Login...</Text>
                </View>
            </SafeAreaView>

            <View style={{ flex: 1, backgroundColor: '#5784BA', paddingHorizontal: 20, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                <View style={{ marginTop: 20 }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: -25, marginTop: -100, fontSize: 20 }}>Email Address</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: 'transparent', color: 'white', borderWidth: 0 }}
                        onChangeText={(e) => setEmail(e)}
                    />
                    <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: -25, marginTop: 25, fontSize: 20 }}>Password</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: 'transparent', color: 'white', borderWidth: 0 }}
                        secureTextEntry
                        onChangeText={(e) => setPassword(e)}

                    />
                    {error && <Text style={{textAlign:'center'}}>{error}</Text>}
                    <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginBottom: 40, marginTop: 40 }}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogin}
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
