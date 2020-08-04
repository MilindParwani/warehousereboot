import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';

export default function MessageUI() {
    return(
        <TouchableOpacity style={{width: '100%', left: 11, height: 70, bottom: 225, marginBottom: 20, paddingTop:380}} activeOpacity={0.5}>
            <View style={{width: '100%', height: 75, bottom: 25, marginTop: 25, right: 10}}>
                <Image 
                    source={require('./images/circle-message.jpg')}
                    style={{width: 60, height: 60, top: 7, left: 10}}
                />
                <View style={{bottom: 50, left: 80, flexDirection: 'column'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>Milind Parwani</Text>
                    <Text style={{fontSize: 18, color: '#b9b9b9'}}>@milindparwani</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
