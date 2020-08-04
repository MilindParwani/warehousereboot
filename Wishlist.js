import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import  { ProfilePost } from './ProfilePost';
import { Header } from './Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WishlistSwiper from './WishlistSwiper'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Wishlist extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={{zIndex: 0, left: 7.5}}>
                    <View style={{backgroundColor: 'white', width: 50, height: 50, borderRadius: 50, right: 165, top: 20}}>

                    </View>
                </View>
                <View style={{top: 55, right: 82.5}}>
                    <View style={{flexDirection: 'row', bottom: 190, right: 20}}>
                        <View style={{zIndex: 1, width: 60, height: 30, top: 135, left: 25}}>
                            <Text style={{color: 'white', fontFamily: 'normal', fontWeight: 'bold', fontSize: 16}}>4.61</Text>
                        </View>
                        <MaterialCommunityIcons name='star' color='white' size={20} style={{top: 135}} />                    
                    </View>
                    <View style={{left: 5, bottom: 118}}>
                        <Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>MILIND</Text>
                    </View>
                </View>
                <View style={{top: 155, right: 120, zIndex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65, marginRight: 25, paddingBottom:5}}>Following</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65, marginRight: 25}}>Followers</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65}}>Category</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 182, left: 65, marginRight: 25, paddingTop: 5, paddingLeft: 18}}>480</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 182, left: 65, marginRight: 25, paddingTop: 5, paddingLeft: 42}}>412</Text>
                        <View style={{flexDirection: 'row', bottom: 177.5, left: 85}}>
                            <Ionicons name='shirt' size={17.5} color='white' style={{marginRight: 8, top: 2.5}} />
                            <MaterialCommunityIcons name='soccer' size={22} color='white' style={{marginRight: 2.5}}/>
                            <Feather name='plus' size={22.5} color='white' />
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor: '#282828', width: '92%', height: 40, borderRadius: 7.5, justifyContent: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity style={{height: 35, width: '48%', backgroundColor: '#121212', borderRadius: 7.5, top: 2.5, left: 95}}>
                        <Text style={styles.text}>WISHLIST</Text>
                    </TouchableOpacity>
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
        top: 7.5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 2,
        fontFamily: 'normal',
        textAlign: 'center'
    }
})