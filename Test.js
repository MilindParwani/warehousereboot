import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput, CheckBox} from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo' ;
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, NavigationRouteContext } from '@react-navigation/native';
import { create } from 'react-test-renderer';
import Profile from './Profile';

export default function Test() {
    return(
            <View style={{zIndex: 1, flex: 1}}>
                <Slider />
            </View>
    )
}


function Posts() {
    const navigation = useNavigation();
    return(
        <View style={{width: '95%', height: 360, backgroundColor: '#121212', top: 50}}>
            <View style={{flexDirection: 'row', width: '100%', height: 75}}>
                <TouchableOpacity style={{height: 75, width: '50%', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold', letterSpacing: 2}}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 75, width: '50%', justifyContent: 'center'}} onPress={() => navigation.navigate('Wishlist')}>
                    <Text style={{textAlign: 'center', fontSize: 25, color: 'white', letterSpacing: 2}}>WISHLIST</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 2, width: '100%', backgroundColor: '#49cabd'}} />
            <View style={{flexDirection: 'row', flexWrap: 'wrap', left: 10, top: 25}}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </View>
        </View>
    )
}

function Wishlist() {
    const navigation = useNavigation()
    return(
        <View style={{width: '95%', height: 360, backgroundColor: '#121212', top: 50}}>
            <View style={{flexDirection: 'row', width: '100%', height: 75}}>
                <TouchableOpacity style={{height: 75, width: '50%', justifyContent: 'center'}} onPress={() => navigation.navigate('Posts')}>
                    <Text style={{textAlign: 'center', fontSize: 25, color: 'white', letterSpacing: 2}}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 75, width: '50%', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 25, color: 'white', letterSpacing: 2, fontWeight: 'bold'}}>WISHLIST</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 2, width: '100%', backgroundColor: '#49cabd'}} />
            <View style={{flexDirection: 'row', flexWrap: 'wrap', left: 10, top: 25}}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </View>
        </View>
    )
}

function Post() {
    return(
        <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 5, height: 110, width: 110, marginRight: 15, marginBottom: 15}}>

        </TouchableOpacity>
    )
}

const Stack = createStackNavigator();

class Slider extends Component {
    render() {
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Posts'>
                    <Stack.Screen name='Posts' component={Posts} />
                    <Stack.Screen name='Wishlist' component={Wishlist} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}