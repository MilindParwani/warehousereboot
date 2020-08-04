import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';



export function Comment() {
    return(
        <View style={{height: 30, width: 340, left: 10, flexDirection: 'row', marginBottom: 15}}>
            <View style={{borderRadius: 35, width: 35, height: 35, backgroundColor: 'white'}}>

            </View>
            <Text style={{color: 'white', fontSize: 15, height: 100, paddingLeft: 10}}>Lorem ipsum dolor sit amet, consectetur prussiasda</Text>
        </View>
    )
}
