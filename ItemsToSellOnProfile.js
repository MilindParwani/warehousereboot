import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TouchableNativeFeedback} from 'react-native';
import { PostDetails } from './PostDetails';
import { Header } from './Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class ItemsToSellOnProfile extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <View style={{width: '100%', left: 20, bottom: 70, flexDirection: 'column'}}>
                        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', top: 45, letterSpacing: 2}}>WHAT ARE YOU SELLING</Text>
                        <View style={{flexWrap: 'wrap', flexDirection: 'row', top: 50, right:8}}>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 200, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20, justifyContent: 'center'}} activeOpacity={0.5}>
                                <MaterialIcons name='phone-iphone' color='white' size={125} style={{left: 30}} />
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 25, top: 10}}>ELECTRONICS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 200, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20}} activeOpacity={0.5}>
                                <MaterialCommunityIcons name='lava-lamp' color='white' size={150} style={{left: 15, top: 10}} />
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 60, top: 7.5}}>DECOR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 200, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20}} activeOpacity={0.5}>
                                <MaterialCommunityIcons name='tshirt-crew' color='white' size={150} style={{left: 17.5, top: 10}} />
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 43, top: 5}}>CLOTHING</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#282828', height: 200, width: '45%', borderRadius: 20, marginTop: 20, marginRight: 20}} activeOpacity={0.5}> 
                                <MaterialCommunityIcons name='soccer' color='white' size={150} style={{left: 17.5, top: 10}} />
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', left: 55, top: 5}}>SPORTS</Text>
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