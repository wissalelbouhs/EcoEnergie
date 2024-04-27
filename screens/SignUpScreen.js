import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

export default function SignUpScreen() {
    const navigation = useNavigation();

    return (
        <View style={{height:'100%', backgroundColor:'#5784BA'}}>
        <ScrollView style={{ flex:1 , backgroundColor: 'white' ,paddingHorizontal: 5,paddingVertical:10 ,borderTopLeftRadius: 300, borderBottomRightRadius: 5}}>
            <SafeAreaView style={{ flex: 1}}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginLeft: 10 }}>
                        <ArrowLeftIcon size={20} color="black" />
                    </TouchableOpacity>
                </View>
                
                
            </SafeAreaView>
            
            <View style={{ flex:1, backgroundColor: 'tranparent',paddingHorizontal: 20,paddingVertical:80, borderTopLeftRadius: 10, borderTopRightRadius: 50,borderBottomLeftRadius:120 }}>
                
                <View style={{ marginTop: 20 }}>
                    
                    <Text style={{ color: '#5784BA', fontWeight: 'bold',fontSize:20, marginBottom: -20,marginTop:100 }}>Full Name</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: 'transparent', borderWidth: 0, marginBottom: 10, color: 'white' }}
                       
                       
                    />
                    <Text style={{ color: '#5784BA', fontWeight: 'bold', fontSize:20, marginBottom: -20,marginTop:40  }}>Email Address</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: 'transparent', borderWidth: 0, marginBottom: 10, color: 'white' }}
                       
                       
                    />
                    <Text style={{ color: '#5784BA', fontWeight: 'bold',fontSize:20, marginBottom: -20,marginTop:40 }}>Password</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: 'transparent', borderWidth: 0, marginBottom: 20, color: 'white' }}
                        secureTextEntry
                       
                       
                    />
                    <TouchableOpacity
                        style={{ backgroundColor: '#5784BA', paddingVertical: 15, borderRadius: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text style={{ color: '#5784BA', fontWeight: 'bold' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        </View>
    );
}
