import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput, CheckBox} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';



export function CartItem() {
        return(
            <TouchableOpacity style={{width: '100%', height: 100, right: 20}} activeOpacity={0.5}>
                <View style={{height: '100%', width: '25%'}}>
                    <Image 
                        source={require('./images/adidas.png')}
                        style={{width: 85, height: 85, borderRadius: 10, left: 8, top: 8}}
                    />
                </View>
                <View style={{bottom: 76, left: 110, flexDirection: 'column'}}>
                    <Text style={{color: 'white',fontWeight: 'bold', fontSize: 13}}>ADIDAS TRACKSUIT TROUSERS</Text>
                    <Text style={{color: 'white',fontWeight: 'bold', fontSize: 13}}>$69</Text>
                    <Text style={{color: 'white',fontWeight: 'bold', fontSize: 13}}>Quantity 1</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <TouchableOpacity style={{zIndex: 1, width: '18%', borderWidth: 1, borderColor: 'white', paddingLeft: 5,bottom: 100, left: 300, borderRadius: 5, flexDirection: 'row'}} activeOpacity={0.5}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, letterSpacing: 0}}>EDIT</Text>
                        <View style={{height: '100%', width: 1, backgroundColor: 'white', left: 10}} />
                        <AntDesign name='check' color='white' size={15} style={{left: 14, top: 2.5}} />
                    </TouchableOpacity>
                </View>
                <View style={{height: 1, backgroundColor: '#282828', width: '100%', bottom: 77, left: 0, zIndex: 1}}/>
            </TouchableOpacity>
        )
    }


const styles=StyleSheet.create({
    header: {
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#282828',
        width: 412,
        height: 1000
    },
    container: {
        top: 50,
        height: 560,
        position: 'absolute',
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        width: 412
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 2,
        top: 35, 
        left: 13
    },
    post: {
        backgroundColor: 'white',
        height: 125,
        width: 120,
        borderRadius: 20,
        marginRight: 15,
        marginBottom: -5
    }
})