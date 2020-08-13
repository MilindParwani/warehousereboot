import React,{Component, useState} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo' ;
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import Home from './Home';
import Search from './Search';
import Messages from './Messages';
import Profile from './Profile';
import { Slider }from './Profile';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, NavigationRouteContext } from '@react-navigation/native';

export default function SignUp() {
    return(
        <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center'}}>
            <Image 
                source={require('./images/warehouse-header.jpg')}
                style={{width: 100, height: 80, top: 30}}
            />
            <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, fontSize: 15, top: 50}}>WAREHOUSE</Text>
            <View style={{flexDirection: 'column', width: '80%', top: 90, left: 20}}>
                <TextInput 
                    placeholder='Email'
                    placeholderTextColor='#282828'
                    style={{fontWeight: 'bold', fontSize: 15, borderBottomColor: '#282828', borderBottomWidth: 2, width: '90%', marginBottom: 10, color: 'white'}}
                />
                <TextInput 
                    placeholder='Username'
                    placeholderTextColor='#282828'
                    style={{fontWeight: 'bold', fontSize: 15, borderBottomColor: '#282828', borderBottomWidth: 2, width: '90%', color: 'white', marginBottom: 10}}
                />
                <TextInput 
                    placeholder='Password'
                    placeholderTextColor='#282828'
                    secureTextEntry={true}
                    style={{fontWeight: 'bold', fontSize: 15, borderBottomColor: '#282828', borderBottomWidth: 2, width: '90%', color: 'white', marginBottom: 10}}
                />
                <TextInput 
                    placeholder='Confirm Password'
                    placeholderTextColor='#282828'
                    secureTextEntry={true}
                    style={{fontWeight: 'bold', fontSize: 15, borderBottomColor: '#282828', borderBottomWidth: 2, width: '90%', color: 'white', marginBottom: 30}}
                />
                <TouchableOpacity style={{borderColor: '#282828', borderWidth: 2, width: '25%', height: 30, justifyContent: 'center'}} activeOpacity={0.5}>
                    <Text style={{color: '#282828', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>SUBMIT</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
 