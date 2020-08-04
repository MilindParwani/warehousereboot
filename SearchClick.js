import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Header } from './Header';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default class SearchClick extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <View style={{left: 25, bottom: 25}}>
                        <FontAwesome5Icon name='search' color='white' size={25} style={{bottom: 222.5, left: 200}} />
                        
                        <View style={{right: 50, bottom: 10}}>
                            <TextInput 
                                style={styles.input}
                                placeholder='Search'
                                placeholderTextColor='white'
                            />
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
        top: 75,
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
        fontFamily: 'normal'
    },
    input: {
        width: 300,
        height: 35,
        bottom: 240,
        right: 15,
        borderBottomColor: '#282828',
        borderBottomWidth: 2,
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingBottom: 8,
        color: 'white'
    }
})