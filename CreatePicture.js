import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

export default class CreatePicture extends Component{
    render() {
        return(
            <View style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
                <View style={{flexDirection: 'row', top: 600, left: 10}}>
                    <TouchableOpacity style={{width: '11%', marginRight: 75}} activeOpacity={0.5}>
                        <MaterialIcons name='add-circle' color='white' size={45} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '10%', marginRight: 75}} activeOpacity={0.5}>
                        <MaterialIcons name='photo-library' color='white' size={45} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '10%', marginRight: 75}} activeOpacity={0.5}>
                        <MaterialIcons name='photo-camera' color='white' size={45} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '11%'}} activeOpacity={0.5}>
                        <MaterialIcons name='check-circle' color='white' size={45} />
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
    }
})