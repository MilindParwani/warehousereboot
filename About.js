import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import { AboutS } from './AboutSettings';
import { Header } from './Header';


export default class About extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <AboutS />
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
        top: 80,
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