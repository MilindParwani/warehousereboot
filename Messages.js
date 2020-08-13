import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo' ;
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, NavigationRouteContext } from '@react-navigation/native';

function MessagesV() {
    return(
        <View style={{height: '100%', width: '100%', alignItems: 'center', flexDirection: 'column', zIndex: 1, backgroundColor: '#121212'}}>
            <ScrollView style={{width: '100%', height: '100%', left: 20}}>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </ScrollView>
        </View>
    )
}

function Message() {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={{backgroundColor: '#282828', width: '90%', height: 115, marginBottom: 20, borderRadius: 5, flexDirection: 'row'}} onPress={() => navigation.navigate('Individual')} activeOpacity={0.5}>
            <View style={{width: 50, height: 50, borderRadius: 50, backgroundColor: 'white', left: 12.5, marginRight: 20, top: 30}}></View>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', top: 20, left: 5}}>Milind Parwani</Text>
            <View style={{flexDirection: 'row', top: 50, right: 127.5}}>
                <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold', marginRight: 50}}>Offer</Text>
                <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold', marginRight: 50}}>Date</Text>
                <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>Status</Text>
            </View>
            <View style={{flexDirection: 'row', top: 70, right: 340}}>
                <Text style={{fontSize: 15, color: 'white', marginRight: 40}}>$10.00</Text>
                <Text style={{fontSize: 15, color: 'white', marginRight: 20}}>12/07/20</Text>
                <Text style={{fontSize: 15, color: 'white'}}>Confirmed</Text>
            </View>
        </TouchableOpacity>
    )
}

function Individual() {
    const navigation = useNavigation();
    return(
        <View style={{flex: 1, backgroundColor: '#121212'}}>
            <View style={{bottom: 0}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <View style={{height: 25, width: 25, backgroundColor: 'white', borderRadius: 25, left: 15, marginRight: 25}}>
            
                    </View>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, textAlignVertical: 'center'}}>Milind Parwani</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '90%', top: 470}}>
                <TextInput 
                    placeholderTextColor='white'
                    placeholder='Enter a message'
                    style={{borderBottomColor: '#49cabd', borderBottomWidth: 2, width: '80%', fontWeight: 'bold', left: 15}}
                />
                <TouchableOpacity style={{borderBottomColor: '#49cabd', borderBottomWidth: 2, width: '20%', left: 325, bottom: 31.5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', paddingBottom: 10, textAlign: 'center'}}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Stack = createStackNavigator();

export default class Messages extends Component {
    render() {
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName='Messages' screenOptions={{headerShown: false}}>
                    <Stack.Screen name='Messages' component={MessagesV} />
                    <Stack.Screen name='Individual' component={Individual} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

