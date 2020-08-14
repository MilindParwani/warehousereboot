import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo' ;
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import Home from './Home';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
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
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forNoAnimation}}>
        <Stack.Screen name='Home' component={HomeNav} />
        <Stack.Screen name='Search' component={SearchNav} />
        <Stack.Screen name='Messages' component={MessagesNav} />
        <Stack.Screen name='Profile' component={ProfileNav} />
        <Stack.Screen name='Picture' component={Picture} />
        <Stack.Screen name='CreateTitle' component={CreateTitle} />
        <Stack.Screen name='CreateDetails' component={CreateDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


function Picture() {
  const navigation = useNavigation();
  return(
    <View style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={{flexDirection: 'row', top: 600, left: 5}}>
        <TouchableOpacity style={{width: '11%', marginRight: 75}} activeOpacity={0.5}>
            <MaterialIcons name='add-circle' color='white' size={45} />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '10%', marginRight: 75}} activeOpacity={0.5}>
            <MaterialIcons name='photo-library' color='white' size={45} />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '10%', marginRight: 75}} activeOpacity={0.5}>
            <MaterialIcons name='photo-camera' color='white' size={45} />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '11%'}} activeOpacity={0.5} onPress={() => navigation.navigate('CreateTitle')}>
            <MaterialIcons name='check-circle' color='white' size={45} />
        </TouchableOpacity>
      </View>
    </View>
  )
}


function CreateTitle() {
  const navigation = useNavigation();
  return(
    <View style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={{flexDirection: 'row', top: 20, left: 25}}>
        <TouchableOpacity style={{marginRight: 30}} >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, borderBottomColor: '#49cadb', borderBottomWidth: 2, paddingBottom: 10}}>Title</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} onPress={() => navigation.navigate('CreateDetails')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{left: 165}} onPress={() => navigation.navigate('Home')}>
          <View style={{width: 40, height: 40, backgroundColor: '#00ced1', borderRadius: 25, justifyContent: 'center', alignItems: 'center'}}>
            <Entypo name='cross' size={40} color='white' />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{width: '90%', height: 220, borderRadius: 5, left: 25, top: 50}}>
        <Image 
          source={require('./images/clothes_test.jpg')}
          style={{width: '100%', height: '100%', borderRadius: 5}}
        />
      </View>
      <View style={{flexDirection: 'column', left: 25, top: 75}}>
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Title</Text>
        <TextInput 
          placeholder='Enter your title here'
          placeholderTextColor='white'
          multiline={true}
          maxLength={30}
          style={{color: 'white', fontSize: 15, paddingRight: 50}}
        />
        <View style={{flexDirection: 'row'}}>
          <CheckBox tintColors={{ true: '#00ced1' }} />
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', textAlignVertical: 'center'}}>Disable Comments</Text>
        </View>
        <View style={{top: 45, left: 5}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, letterSpacing: 2, marginBottom: 15, textAlign: 'center', right: 32.5}}>SHARE TO</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome5Brands name='facebook-square' size={75} color='#282828' style={{marginRight: 30}} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome5Brands name='instagram-square' color='#282828' size={75} style={{marginRight: 30}}  />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome5Brands name='snapchat-square' color='#282828' size={75} style={{marginRight: 30}}  />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome5Brands name='twitter-square' color='#282828' size={75} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

function CreateDetails() {
  const navigation = useNavigation();
  return(
    <View style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={{flexDirection: 'row', top: 20, left: 25}}>
        <TouchableOpacity style={{marginRight: 30}} onPress={() => navigation.navigate('CreateTitle')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Title</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, borderBottomColor: '#49cadb', borderBottomWidth: 2, paddingBottom: 10}}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{left: 165}} onPress={() => navigation.navigate('Home')}>
          <View style={{width: 40, height: 40, backgroundColor: '#00ced1', borderRadius: 25, justifyContent: 'center', alignItems: 'center'}}>
            <Entypo name='cross' size={40} color='white' />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, left: 25, top: 50}}>Description</Text>
      <TextInput 
        placeholder='Enter your description here'
        placeholderTextColor='white'
        multiline={true}
        maxLength={800}
        style={{color: 'white', fontSize: 15, top: 50, left: 22.5, paddingRight: 50}}
      />
      <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', left: 25, top: 50}}>Comments</Text>
      <Text style={{color: '#00ced1', fontSize: 15, fontWeight: 'bold', textAlign: 'center', top: 90}}>Comments are disabled/enabled</Text>
    </View>
  )
}

function HomeNav() {
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
      <View style={{width: '100%', height: '100%', top: 50, left: 10}}>
        <Home />
      </View>
      <TouchableOpacity style={{width: 50, height: 50, backgroundColor: '#00ced1', borderRadius: 25, justifyContent: 'center', alignItems: 'center', zIndex: 1, position: 'absolute', left: 340, top: 600}} onPress={() => navigation.navigate('Picture')} activeOpacity={0.5}>
        <EvilIcons name='pencil' size={45} color='white' />
      </TouchableOpacity>
    </View>
  )
}

function SearchNav() {
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
      <View style={{width: '100%', height: '100%', top: 50}}>
        <Search />
      </View>
    </View>
  )
}

function MessagesNav() {
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

function ProfileNav() {
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

