import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';


export function NotificationsS() {
    return(
        <View style={{height: '100%', width: '100%', top: 50}}>
            <View>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 10, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>ON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 20, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>OFF</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 30, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>MANAGE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}