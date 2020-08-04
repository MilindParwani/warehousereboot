import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ImageBackground, TouchableNativeFeedback} from 'react-native';



export function Header() {
        return(
            <View style={{width: '100%', bottom: 550, backgroundColor: '#121212', flexDirection: 'row', height: 50, borderBottomColor: '#282828', borderBottomWidth: 2, height: 50, bottom: 50}}>
                <Image 
                    source={require('./images/title.png')}
                    style={{height:30, width: 173.33, top: 10}}
                />
            </View>
        )
    }
