import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function IndividualMessageUI() {
    return(
        <TouchableOpacity style={{width: '100%', height: 100, bottom: 255, marginBottom: 15, backgroundColor: '#282828'}} activeOpacity={0.5}>
            <View style={{width: '100%', height: 75, bottom: 0}}>
                <View style={{backgroundColor: 'white', width: 50, height: 50, borderRadius: 50}}>

                </View>
                <View style={{bottom: 37.5, left: 70, flexDirection: 'column'}}>
                    <Text style={{fontSize: 20, color: 'white'}}>@milindparwani</Text>
                </View>
                <View style={{zIndex: 1, width: 35, height: 35, borderRadius: 35, bottom: 67.5, left: 360}}>
                    <MaterialIcons name='check-circle' color='white' size={45} />
                </View>
                <View style={{bottom: 35, left: 15}}>
                    <View style={{flexDirection: 'row', bottom: 27.5, left: 60}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginRight: 50}}>Offer:</Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginRight: 50}}>Date:</Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Status:</Text>
                    </View>
                    <View style={{flexDirection: 'row', bottom: 27.5, left: 60}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginRight: 40}}>$10.00</Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginRight: 22.5}}>12/07/20</Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Confirmed</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        
    );
}

