import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, CheckBox} from 'react-native';
import { PostDetails } from './PostDetails';
import { Header } from './Header';


export default class Buy extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <View style={{width: '100%', height: '100%', top: 185}}>
                        <View style={{width: '100%', left: 18, bottom: 177.5, flexDirection: 'row'}}>
                            <TouchableOpacity style={{width: '46%', height: 40, borderColor: 'white', borderWidth: 1, justifyContent: 'center'}} activeOpacity={0.5}>
                                <Text style={styles.text}>PAY ONLINE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '46%', height: 40, borderColor: 'white', borderWidth: 1, justifyContent: 'center'}} activeOpacity={0.5}>
                                <Text style={styles.text}>PAY IN PERSON</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderRadius: 10, width: '92%', height: '20%' ,bottom: 160, left: 18}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14,paddingLeft: 7,paddingTop: 5}}>Message from the seller</Text>
                            <Text style={{color: 'white',fontSize: 14,paddingLeft: 7,paddingTop: 7, paddingRight: 7}}>Come during the day, don't ring the doorbell doorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbell</Text>
                        </View>
                        <View style={{borderWidth: 1, borderColor: 'white', width: '92%', height: '30%', borderRadius: 10, left: 18, bottom: 37}}>  
                        
                        </View>
                        <View style={{height: 1, backgroundColor: '#282828', width: '92%', bottom: 322, left: 17, zIndex: 1}}/>
                        <View style={{height: 1, backgroundColor: '#282828', width: '92%', bottom: 220, left: 17, zIndex: 1}}/>
                        <View style={{height: 1, backgroundColor: '#282828', width: '92%', bottom: 452, left: 17, zIndex: 1}}/>
                        <View style={{height: 1, backgroundColor: '#282828', width: '92%', bottom: 27, left: 17, zIndex: 1}}/>
                        <View style={{width: '92%', height: 100, borderRadius: 10, bottom: 322, left: 18, flexDirection: 'column'}}>
                            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold', paddingTop: 10, paddingLeft: 10}}>Seller Address</Text> 
                            <Text style={{color: 'white', fontSize: 14,paddingLeft: 10}}>Dubai, UAE</Text> 
                            <Text style={{color: 'white', fontSize: 14, paddingLeft: 10}}>The Villa, Centro</Text> 
                            <Text style={{color: 'white', fontSize: 14,  paddingLeft: 10}}>Courtyard 2, Villa 3</Text> 
                        </View>
                        <TouchableOpacity style={{borderWidth: 1, borderColor: 'white', borderRadius: 10, width: '35%', justifyContent: 'center', alignItems: 'center', bottom: 118, left: 252.5, height: 40}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, textAlign: 'center'}}>Confirm</Text>
                        </TouchableOpacity>
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
        fontSize: 12,
        textAlign: 'center'
    }
})