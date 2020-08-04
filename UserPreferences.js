import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TouchableNativeFeedback} from 'react-native';
import { PostDetails } from './PostDetails';
import { Header } from './Header';



export default class UserPreferences extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <View style={{width: '100%', left: 20, bottom: 75, flexDirection: 'column'}}>
                        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', top: 60, left: 65, letterSpacing: 2}}>PICK YOUR CARGO</Text>
                        <View style={{flexWrap: 'wrap', flexDirection: 'row', top: 60, right:8}}>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 100, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20, justifyContent: 'center'}} activeOpacity={0.5}>
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 25}}>ELECTRONICS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 100, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20, justifyContent: 'center'}} activeOpacity={0.5}>
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 60}}>DECOR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 100, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20, justifyContent: 'center'}} activeOpacity={0.5}>
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 43}}>CLOTHING</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 100, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20, justifyContent: 'center'}} activeOpacity={0.5}> 
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 55}}>SPORTS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 100, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20, justifyContent: 'center'}} activeOpacity={0.5}> 
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 55}}>GAMING</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 100, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20, justifyContent: 'center'}} activeOpacity={0.5}> 
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 70}}>TOYS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 100, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20, justifyContent: 'center'}} activeOpacity={0.5}> 
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 70}}>ART</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 100, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20, justifyContent: 'center'}} activeOpacity={0.5}> 
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 60}}>SHOES</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    header: {
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#121212',
        width: 412,
        height: 1000
    },
    container: {
        top: 60,
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
    }
})