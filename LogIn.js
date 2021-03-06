import React,{Component, useState} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';

export default function LogIn() {
    return(
        <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center'}}>
            <Image 
                source={require('./images/warehouse-header.jpg')}
                style={{width: 100, height: 80, top: 30}}
            />
            <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, fontSize: 15, top: 50}}>WAREHOUSE</Text>
            <View style={{flexDirection: 'column', width: '80%', top: 90, left: 20}}>
                <TextInput 
                    placeholder='Username'
                    placeholderTextColor='#282828'
                    style={{fontWeight: 'bold', fontSize: 15, borderBottomColor: '#282828', borderBottomWidth: 2, width: '90%', marginBottom: 10, color: 'white'}}
                />
                <TextInput 
                    placeholder='Password'
                    placeholderTextColor='#282828'
                    secureTextEntry={true}
                    style={{fontWeight: 'bold', fontSize: 15, borderBottomColor: '#282828', borderBottomWidth: 2, width: '90%', color: 'white', marginBottom: 15}}
                />
                <View style={{flexDirection: 'row', right: 5, marginBottom: 15}}>
                    <CheckBox />
                    <Text style={{color: '#282828', fontWeight: 'bold', fontSize: 15, textAlignVertical: 'center'}}>Remember me</Text>
                </View>
                <TouchableOpacity style={{borderColor: '#282828', borderWidth: 2, width: '25%', height: 30, justifyContent: 'center'}} activeOpacity={0.5}>
                    <Text style={{color: '#282828', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            <View style={{position: 'absolute', top: 270}}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, fontSize: 15, top: 240, textAlign: 'center'}}>OR LOG IN WITH</Text>
                <View style={{flexDirection: 'row', top: 260}}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <FontAwesome5Brands name='facebook-square' size={75} color='#282828' style={{marginRight: 30}} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <FontAwesome5Brands name='google-plus-square' color='#282828' size={75} style={{marginRight: 30}}  />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <FontAwesome5Brands name='twitter-square' color='#282828' size={75} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
 