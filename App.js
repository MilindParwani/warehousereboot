import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo' ;
import Home from './Home';
import Search from './Search';
import Messages from './Messages';
import Profile from './Profile';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { Slider }from './Profile';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forNoAnimation}}>
        <Stack.Screen name='Home' component={HomeView} />
        <Stack.Screen name='Search' component={SearchView} />
        <Stack.Screen name='Messages' component={MessagesView} />
        <Stack.Screen name='Profile' component={ProfileView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function HomeView() {
  const navigation = useNavigation();
  return(
    <View style={{height: '100%', width: '100%', backgroundColor: '#121212', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', top: 20}}>
        <TouchableOpacity style={{marginRight: 15}}  >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, borderBottomColor: '#49cadb', borderBottomWidth: 2, paddingBottom: 10}}>Home</Text>
        </TouchableOpacity >
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.navigate('Search')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.navigate('Messages')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} onPress={() => navigation.navigate('Profile')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Profile</Text>
        </TouchableOpacity>
      </View>
      <Home />
    </View>
  )
}

function SearchView() {
  const navigation = useNavigation();
  return(
    <View style={{height: '100%', width: '100%', backgroundColor: '#121212', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', top: 20}}>
        <TouchableOpacity style={{marginRight: 15}}  onPress={() => navigation.navigate('Home')} >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Home</Text>
        </TouchableOpacity >
        <TouchableOpacity style={{marginRight: 15}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, borderBottomColor: '#49cadb', borderBottomWidth: 2, paddingBottom: 10}}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.navigate('Messages')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Profile</Text>
        </TouchableOpacity>
      </View>
      <Search />
    </View>
  )
}

function MessagesView() {
  const navigation = useNavigation();
  return(
    <View style={{height: '100%', width: '100%', backgroundColor: '#121212', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', top: 20}}>
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.navigate('Home')} >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Home</Text>
        </TouchableOpacity >
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.navigate('Search')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 15}} >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, borderBottomColor: '#49cadb', borderBottomWidth: 2, paddingBottom: 10}}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} onPress={() => navigation.navigate('Profile')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: '100%', width: '100%', top: 50}}>
        <Messages />
      </View>
    </View>
  )
}

function ProfileView() {
  const navigation = useNavigation();
  return(
    <View style={{height: '100%', width: '100%', backgroundColor: '#121212', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', top: 20}}>
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.navigate('Home')}  >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Home</Text>
        </TouchableOpacity >
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.navigate('Search')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.navigate('Messages')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, borderBottomColor: '#49cadb', borderBottomWidth: 2, paddingBottom: 10}}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', height: '100%', top: 50}}>
        <Profile />
      </View>
    </View>
  )
}
