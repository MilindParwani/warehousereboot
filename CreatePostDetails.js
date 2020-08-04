import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ImageBackground, TextInput, CheckBox} from 'react-native';
import { Comment } from './Comment';
import { Header } from './Header';


export function CreatePostDetails() {
        return(
            <View style={styles.post}>
                <View style={{width: '100%', backgroundColor: '#282828', height: 1, top: 440, left: 15}} />
                <View style={{width: '100%', height:100 ,top: 40, flexDirection: 'column', }}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30, left: 10, bottom: 7}}>Description</Text>
                    <View style={{width: '95%'}}>
                        <TextInput
                            placeholder='Enter your description here'
                            placeholderTextColor='#282828' 
                            style={{color: 'white', fontSize: 15, left: 10, bottom: 3, width: '100%' }}
                            maxLength={1000}
                            multiline={true}
                        />
                    </View>
                </View>
                <View style={{width: '100%', height:100 ,top: 60, flexDirection: 'column', }}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30, left: 10,}}>Comments</Text>
                    <View style={{width: '95%', flexDirection: 'column', top: 3}}>
                        <Text style={{color: '#32CD32', fontWeight: 'bold', fontSize: 13, left: 150, top: 90}}>Comments are off</Text>
                    </View>
                </View>
                <View style={styles.postOverlay}>
                    <TouchableOpacity style={{height: 30, width: '75%', top: 2, left: 12, width: 175, justifyContent: 'center', top:5, left: 0 }} activeOpacity={0.5}>
                        <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white', left: 25}}>Disable comments</Text>
                    </TouchableOpacity>
                    <CheckBox 
                        style={{top: 5, right:17.5}}
                    />
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
        height: 500,
        width: '90%',
        bottom: 180,
        right: 15,
        marginBottom: 30

    },
    postOverlay: {
        width: '100%',
        height: 35,
        top:245,
        flexDirection: 'row',
        zIndex: 1
    },

})