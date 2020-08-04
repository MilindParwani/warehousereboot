import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, TextInput, CheckBox } from 'react-native';

export default class SignUp extends Component{
    render() {
        let data = [{
            value: 'Email',
        },{
            Value: 'Phone',
        }];
        return(
            <View style={styles.header}>
                <Image 
                    source={require('./images/warehouse-header.jpg')}
                    style={{width:99, height: 75, bottom : 10}}
                />
                <TouchableOpacity style={{right: 160, bottom: 80}} activeOpacity={0.5}>
                    <Image 
                        style={{width: 40, height: 40}}
                        source={require('./images/rounded.jpg')}
                    />
                </TouchableOpacity>
                <View style={{bottom: 45}}><Text style={styles.text}>WAREHOUSE</Text></View>
                <View style={styles.signUpContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Name'
                        placeholderTextColor='white'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Username'
                        placeholderTextColor='white'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Confirm Password'
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='white'
                        keyboardType='email-address'

                    />
                
                    <View style={{top:40,right:40, flexDirection: 'row'}}>
                        <CheckBox 
                            style={{bottom: 5, right: 20}}
                        />
                        <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold', right: 15}}>I agree to terms and conditions</Text>
                    </View>
                    <View style={{top: 50}}>
                        <FlatButton text='submit' />
                    </View>
                </View>
            </View>
        )
    }
}

var radio_props = [
    {label: 'I agree to the terms and conditions.', value: 1},
];

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
    },
    signUpContainer: {
        backgroundColor: '#1b1b1b',
        alignItems: 'center',
        height: 480,
        width: '95%',
        bottom: 20,
        borderRadius: 20
    },
    input: {
        height: 40,
        width: '90%',
        borderColor: '#282828',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 16,
        top: 40,
        textAlign: 'left',
        paddingLeft: 10
    }
})