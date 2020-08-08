import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput, CheckBox } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';



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

function SignUpNav() {
    const navigation = useNavigation();
    return(
        <View style={{width: '100%', height: 525, backgroundColor: '#121212', flexDirection: 'column'}}>
            <View style={{backgroundColor: '#282828', width: '92%', height: 40, borderRadius: 7.5, justifyContent: 'center', flexDirection: 'row', left: 15}}>
                <TouchableOpacity style={{height: 35, width: '48%', borderRadius: 7.5, top: 2.5, marginRight: 5, right: 2.5, justifyContent: 'center'}} onPress={() => navigation.navigate('LogIn') }>
                    <Text style={styles.text}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 35, width: '48%', backgroundColor: '#121212', borderRadius: 7.5, top: 2.5, left: 2.5, justifyContent: 'center'}}>
                    <Text style={styles.text}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <View style={{top: 20, left: 10}}>
                <TextInput 
                    placeholder='Name'
                    placeholderTextColor='white'
                    style={{color: 'white', fontSize: 15, fontWeight: 'bold', left: 15, width: '86%', borderBottomColor: '#282828', borderBottomWidth: 1, borderRadius: 5, height: 37.5, paddingLeft: 10}}
                />
            </View>
            <View style={{top: 40, left: 10}}>
                <TextInput 
                    placeholder='Username'
                    placeholderTextColor='white'
                    style={{color: 'white', fontSize: 15, fontWeight: 'bold', left: 15, width: '86%', borderBottomColor: '#282828', borderBottomWidth: 1, borderRadius: 5, height: 37.5, paddingLeft: 10}}
                />
            </View>
            <View style={{top: 60, left: 10}}>
                <TextInput 
                    placeholder='Password'
                    placeholderTextColor='white'
                    style={{color: 'white', fontSize: 15, fontWeight: 'bold', left: 15, width: '86%', borderBottomColor: '#282828', borderBottomWidth: 1, borderRadius: 5, height: 37.5, paddingLeft: 10}}
                />
            </View>
            <View style={{top: 80, left: 10}}>
                <TextInput 
                    placeholder='Confirm Password'
                    placeholderTextColor='white'
                    style={{color: 'white', fontSize: 15, fontWeight: 'bold', left: 15, width: '86%', borderBottomColor: '#282828', borderBottomWidth: 1, borderRadius: 5, height: 37.5, paddingLeft: 10}}
                />
            </View>
            <View style={{top: 100, left: 10}}>
                <TextInput 
                    placeholder='Email'
                    placeholderTextColor='white'
                    style={{color: 'white', fontSize: 15, fontWeight: 'bold', left: 15, width: '86%', borderBottomColor: '#282828', borderBottomWidth: 1, borderRadius: 5, height: 37.5, paddingLeft: 10}}
                />
            </View>
            <View style={{top: 120, left: 12.5, flexDirection: 'row'}}>
                <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', left: 50}}>I agree to the terms and conditions</Text>
                <CheckBox style={{right: 200, bottom:7.5}} />
            </View>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', left: 120, top: 212.5}}>DON'T HAVE AN ACCOUNT</Text>
            <TouchableOpacity style={{top: 215, left: 170}}>
                <Text style={{fontSize: 13, letterSpacing: 2, fontWeight: 'bold', color: 'white'}}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 35, width: 100, left: 150, top: 125, borderRadius: 7.5, backgroundColor: '#282828', justifyContent: 'center'}}>
                <Text style={styles.text}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    )
}

function LogInNav() {
    const navigation = useNavigation();
    return(
        <View style={{width: '100%', height: 510, backgroundColor: '#121212'}}>
            <View style={{backgroundColor: '#282828', width: '92%', height: 40, borderRadius: 7.5, justifyContent: 'center', flexDirection: 'row', left: 15}}>
                <TouchableOpacity style={{height: 35, width: '48%',backgroundColor: '#121212', borderRadius: 7.5, top: 2.5, marginRight: 5, right: 2.5, justifyContent: 'center'}}>
                    <Text style={styles.text}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 35, width: '48%', borderRadius: 7.5, top: 2.5, left: 2.5, justifyContent: 'center'}} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.text}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'column'}}>
                <View style={{top: 20, left: 10}}>
                    <TextInput 
                        placeholder='Username'
                        placeholderTextColor='white'
                        style={{color: 'white', fontSize: 15, fontWeight: 'bold', left: 15, width: '86%', borderBottomColor: '#282828', borderBottomWidth: 1, borderRadius: 5, height: 37.5, paddingLeft: 10}}
                    />
                </View>
                <View style={{top: 40, left: 10}}>
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor='white'
                        style={{color: 'white', fontSize: 15, fontWeight: 'bold', left: 15, width: '86%', borderBottomColor: '#282828', borderBottomWidth: 1, borderRadius: 5, height: 37.5, paddingLeft: 10}}
                    />
                </View>
                <View style={{top: 60, left: 12.5, flexDirection: 'row'}}>
                    <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', left: 50, bottom: 1}}>Remember me</Text>
                    <CheckBox style={{right: 75, bottom:7.5}} />
                </View>
                <TouchableOpacity style={{top: 325, left: 100}}>
                    <Text style={{fontSize: 13, letterSpacing: 2, fontWeight: 'bold', color: 'white'}}>FORGOT YOUR PASSWORD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 35, width: 100, left: 150, top: 250, borderRadius: 7.5, backgroundColor: '#282828', justifyContent: 'center'}}>
                    <Text style={styles.text}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Stack = createStackNavigator();


class LogInSlider extends Component{
    render() {
        return(
            <NavigationContainer independent={true} >
                <Stack.Navigator screenOptions={{
                    headerShown: false, 
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }} 
                    initialRouteName='SignUp'>
                    <Stack.Screen  name='LogIn' component={LogInNav} />
                    <Stack.Screen name='SignUp' component={SignUpNav} />
                </Stack.Navigator>
            </NavigationContainer>
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
        fontFamily: 'sans-serif-light',
        textAlign: 'center'
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
