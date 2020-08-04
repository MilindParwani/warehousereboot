import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';



export function SearchPost() {
        return(
            <TouchableOpacity style={{bottom: 170, right: 135}} activeOpacity={0.5}>
                <View style={styles.post}>
                    <View style={{left: 7, top: 3}}>
                        <Text style={{color: 'black', fontFamily: 'normal', fontWeight: 'bold', fontSize: 14, textAlign: 'center', letterSpacing: 0, left: 10}}>$10</Text>
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
        fontSize: 13,
        letterSpacing: 2,
        fontFamily: 'monospace'
    },
    post: {
        backgroundColor: 'white',
        height: 85,
        width: 85,
        borderRadius: 10,
        marginRight: 15,
    }
})