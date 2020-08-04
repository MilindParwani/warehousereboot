import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ImageBackground, TouchableNativeFeedback, TextInput, CheckBox, onPress} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Header }  from './Header';


export function CreatePost() {
        return(
            <View style={styles.post}>
                <View style={{top: 155}}>
                    <Header />
                </View>
                <View style={{top: 160}}>
                    <Image 
                        source={require('./images/clothes_test.jpg')}
                        style={{width: '92%', height: 200, left: 15, borderRadius: 10, top: 10}}
                    />
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30, left: 19, top: 17.5}}>Title</Text>
                    <TextInput 
                        style={{fontWeight: 'bold',fontSize: 15, color: 'white', top: 10, left: 15, paddingRight: 30}}
                        placeholder='Enter your title here'
                        placeholderTextColor='#282828'
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white', left: 20, top: 10}}>Disable comments</Text>
                    <CheckBox 
                    style={{left: 150, bottom: 15}} 
                    />
                    <View style={{right: 17.5, bottom:30}}>
                        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 22, left: 305, bottom: 300, borderRadius: 8, width: 75, height: 30, textAlign: 'center'}}>$</Text>
                        <TextInput 
                            style={{zIndex: 1,color: 'black', fontWeight: 'bold', fontSize: 22, left: 310, bottom: 300, borderRadius: 8, width: 75, height: 50, textAlign: 'center', left: 340, bottom: 339}}
                            placeholder='0.00'
                            placeholderTextColor= '#282828'
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={{height: 1, backgroundColor: '#282828', width: '92%',bottom: 85, left: 15}}/>
                    <View style={{top: 70}}>
                        <TouchableOpacity style={{borderBottomColor: '#282828', borderBottomWidth: 1, height: 40, width: '95%', left: 10, justifyContent: 'center', bottom: 145, marginBottom: 10, borderRadius: 10, flexDirection: 'row'}}  activeOpacity={0.5}>
                            <Image 
                                source={require('./images/snapchat-vector.jpg')}
                                style={{width: 35, height: '90%', bottom: 3, right: 97}}
                            />
                            <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', top: 5, right: 82.5}}>SHARE TO SNAPCHAT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomColor: '#282828', borderBottomWidth: 1, height: 40, width: '95%', left: 10, justifyContent: 'center', bottom: 142.5, marginBottom: 10, borderRadius: 10, flexDirection: 'row'}}  activeOpacity={0.5}>
                                <Image 
                                source={require('./images/instagram-vector.jpg')}
                                style={{width: '9%', height: '90%', bottom: 3, right: 95}}
                            />
                            <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', top: 5, right: 80}}>SHARE TO INSTAGRAM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomColor: '#282828', borderBottomWidth: 1, height: 40, width: '95%', left: 10, justifyContent: 'center', bottom: 140, borderRadius: 10, flexDirection: 'row'}}  activeOpacity={0.5}>
                            <Image 
                                source={require('./images/facebook.jpg')}
                                style={{width: '9%', height: '90%', bottom: 3, right: 100}}
                            />
                            <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', top: 5, right: 85}}>SHARE TO FACEBOOK</Text>
                        </TouchableOpacity>
                    </View>
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
        height: 1000,
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
        backgroundColor: '#121212',
        height: 750,
        width: '100%',
        bottom: 260,
        right: 20,
    },
    postOverlay: {
        backgroundColor: '#282828',
        width: '100%',
        height: 35,
        bottom: 74,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
        zIndex: 1,
        borderColor: 'transparent',
        borderWidth: 1
    },

})