import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { Comment } from './Comment';


export function PostDetails() {
        return(
            <View style={styles.post}>
                <View style={{width: '100%', backgroundColor: '#282828', height: 1, top: 470}} />
                <View style={{width: '100%', height:100 ,top: 20, flexDirection: 'column', }}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30, left: 10, bottom: 7}}>Description</Text>
                    <View style={{width: '95%'}}>
                        <Text style={{color: 'white', fontSize: 15, left: 10, bottom: 3 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Text>
                    </View>
                </View>
                <View style={{width: '100%', height:100 ,top: 45, flexDirection: 'column', }}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30, left: 10, bottom: 4}}>Comments</Text>
                    <View style={{width: '95%', flexDirection: 'column', top: 3}}>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </View>
                </View>
                <View style={styles.postOverlay}>
                    <Text style={{color: 'white', fontSize: 15,top: 10, fontWeight: 'bold', left: 260}}>Interactions</Text>
                </View>
            </View>
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
        height: '100%',
        width: '100%',
        bottom: 170,
        right: 20,
        marginBottom: 30
        
    },
    postOverlay: {
        width: '100%',
        height: 55,
        top:280,
        flexDirection: 'row'
    },

})