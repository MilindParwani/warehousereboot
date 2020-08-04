import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export function ProfilePostRemove() {
        return(
            <TouchableOpacity style={{bottom: 170, right: 135}} activeOpacity={0.5}>
                <View style={styles.post}>
                    <TouchableOpacity style={{left: 95, bottom: 7.5, zIndex: 1}}>
                        <Ionicons name='md-remove-circle' color='red' size={35} />
                    </TouchableOpacity>
                    <View style={{left: 7, top: 3}}>
                        <Text style={{color: 'black', fontFamily: 'normal', fontWeight: 'bold', fontSize: 14, textAlign: 'center', letterSpacing: 0, right: 40, bottom: 32.5}}>$10</Text>
                    </View>
                </View>
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
        fontSize: 20,
        letterSpacing: 2,
        left: 8,
        bottom:3
    },
    post: {
        backgroundColor: 'white',
        height: 125,
        width: 120,
        borderRadius: 20,
        marginRight: 15,
        marginBottom: -5
    },
    remove: {
        backgroundColor: 'red',
        width: 25,
        height: 25,
        borderRadius: 25,
        zIndex: 1,
        left: 100, bottom: 5
    }
})