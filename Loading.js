import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';

export default function Loading() {
    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1, backgroundColor: '#121212'}}>
            <Image 
                source={require('./images/warehouse-header.jpg')}
                style={{width: 100, height: 80}}
            />
            <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, top: 10}}>WAREHOUSE</Text>
            <ActivityIndicator size={75} color='#282828' style={{top: 200}} />
        </View>
    )
}