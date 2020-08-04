import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity,TextInput, CheckBox} from 'react-native';
import LogInSlider from './LogInSlider';


export default class LogIn extends Component{
    render() {
        return(
            <View style={styles.header}>
                <Image
                    style={{width:99,height:75,bottom:10}}
                    source={require('./images/warehouse-header.jpg')}
                />
                <Text style={styles.text}>WAREHOUSE</Text>
                <View style={{width: '100%', zIndex: 1, height: 510, top: 20, paddingBottom: 1}}>
                    <LogInSlider />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#121212',
        paddingTop: 25
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 2,
        fontFamily: 'sans-serif-light'
    },
    logInContainer: {
        backgroundColor: '#1b1b1b',
        alignItems: 'center',
        height: 470,
        width: 375,
        borderRadius: 20,
        top: 0
    },
    input: {
        height: 40,
        width: '95%',
        borderColor: '#282828',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 16,
        top: 50,
        textAlign: 'left',
        paddingLeft: 10,
        color: 'white'
    },
})
