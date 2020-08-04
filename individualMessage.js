import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Header } from './Header'
import IndividualMessageUI from './individualMessageUI';




export default class IndividualMessage extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <View style={{top: 230, width: '100%'}}>
                    <TouchableOpacity style={{width: '92%', height: 100, bottom: 245, marginTop: 20, backgroundColor: '#282828', borderRadius: 7.5, left: 17.5}} activeOpacity={0.5}>
                        <View style={{width: '100%', height: 75, bottom: 0}}>
                            <View style={{height: 50, width: 50, borderRadius: 50, zIndex: 1, backgroundColor: 'white', left: 10, top: 20}}>

                            </View>
                            <View style={{bottom: 35, left: 75, flexDirection: 'column'}}>
                                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Milind Parwani</Text>
                            </View>
                            <View style={{bottom: 5,left: 15}}>
                                <View style={{flexDirection: 'row', bottom: 27.5, left: 60}}>
                                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginRight: 55}}>Offer</Text>
                                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginRight: 52.5}}>Date</Text>
                                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Status</Text>
                                </View>
                                <View style={{flexDirection: 'row', bottom: 27.5, left: 60}}>
                                    <Text style={{color: 'white', fontSize: 15, marginRight: 42.5}}>$10.00</Text>
                                    <Text style={{color: 'white', fontSize: 15, marginRight: 25}}>12/07/20</Text>
                                    <Text style={{color: 'white', fontSize: 15}}>Confirmed</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                        <View style={{height: 450, width: 410}}>
                            <View style={{bottom: 230}}>
                                <TouchableOpacity style={{top: 390, left: 320, justifyContent: 'center', borderRadius: 10, borderColor: 'white', borderWidth: 1, width: '20%', height: '20%'}} activeOpacity={0.5}>
                                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'center', letterSpacing: 2}}>SEND</Text>
                                </TouchableOpacity>
                                <View style={{top: 590, left: 40}}>
                                    <TextInput 
                                        style={styles.input}
                                        placeholder='Send a message'
                                        placeholderTextColor='white'
                                    />
                                </View>
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 2,
        fontFamily: 'monospace'
    },
    input: {
        paddingRight: 10,
        width: '75%',
        height: 40,
        bottom: 240,
        right: 30,
        borderBottomColor: '#282828',
        borderBottomWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 15,
        color: 'white'
    },

})