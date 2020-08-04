import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import  { ProfilePost } from './ProfilePost';
import { Header } from './Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class MakeProfile extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <View style={{bottom:85, right: 75}}>
                        <View style={{bottom: 30, left: 10}}>
                            <TouchableOpacity style={{backgroundColor: '#282828',width: 50, height: 15, left: 340,top: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 20}} activeOpacity={0.5}>
                                <View style={{bottom: 15}}>
                                    <Text style={styles.text}>...</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#282828',left: 340, top: 10, width: 50, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 20}} activeOpacity={0.5}>
                                <Ionicons name='md-settings-outline' color='white' size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={{top: 100, right: 55}}>
                            <View style={{bottom: 40}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{backgroundColor: 'white', height: 50, width: 50, borderRadius: 50, left: 65, bottom: 130}}>

                                    </View>
                                <View style={{bottom: 57, left: 72 }}>
                                    <View style={{flexDirection: 'row', bottom: 180, right: 20}}>
                                        <View style={{zIndex: 1, width: 60, height: 30, top: 135, left: 25}}>
                                            <Text style={{color: 'white', fontFamily: 'normal', fontWeight: 'bold', fontSize: 16}}>0.00</Text>
                                        </View>
                                        <MaterialCommunityIcons name='star' color='white' size={20} style={{top: 135}} />    
                                    </View>
                                    <View style={{left: 5, bottom: 118}}>
                                        <TextInput 
                                            placeholder='ENTER NAME'
                                            placeholderTextColor= 'white'
                                            style={{fontWeight: 'bold', fontSize: 25, color: 'white', right: 3}}
                                        />
                                    </View>
                            </View>
                            </View>
                            </View>
                            <View style={{bottom: 8, left: 2}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65, marginRight: 25, paddingBottom:5}}>Following</Text>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65, marginRight: 25}}>Followers</Text>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65}}>Category</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 181, left: 77, marginRight: 25, paddingTop: 5, paddingLeft: 18}}>0</Text>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 181, left: 97, marginRight: 25, paddingTop: 5, paddingLeft: 42}}>0</Text>
                                </View>
                                <TouchableOpacity style={{borderColor: '#282828', borderWidth: 1, height: 20, left: 250, width: 80, justifyContent: 'center', bottom: 200}} activeOpacity={0.5}>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>SELECT</Text>
                                </TouchableOpacity>
                        </View>
                        </View>
                        <View style={{right: 55, top: 5}}>
                            <View style={{bottom: 90, left: 58}}>
                                <TouchableOpacity style={{width: 195, height: 40, backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', left: 5, alignItems: 'center'}}>  
                                    <Text style={styles.text}>MY POSTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:195, height: 40, backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', left: 200, bottom: 40, alignItems: 'center'}}>  
                                    <Text style={styles.text}>WISHLIST</Text>
                                </TouchableOpacity>
                            </View>
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
        top: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 2,
        fontFamily: 'normal'
    }
})