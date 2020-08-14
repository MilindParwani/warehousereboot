import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo' ;
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class Home extends Component {
  render() {
    return(
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='Buy' screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forNoAnimation}}>
          <Stack.Screen name='HomeView' component={HomeView} />
          <Stack.Screen name='Profile' component={HomeProfileView} />
          <Stack.Screen name='Details' component={PostDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

function HomeProfileView() {
  return(
    <View style={{width: '100%', height: '100%', right: 10}}>
      <Profile />
    </View>
  )
}

function PostDetails() {
  const navigation = useNavigation();
  return(
    <View style={{flex: 1, backgroundColor: '#121212'}}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, left: 10, top: 10}}>Description</Text>
      <Text style={{color: 'white', fontSize: 20, left: 10, top: 20, paddingRight: 10}}>This is a descriptionThis is a description.This is a description.This is a description.This is a description..ion..ion..ion..ion..ion..ion..</Text>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, left: 10, top: 40}}>Comments</Text>
      <View style={{top: 50, left: 10, height: 275}}>
        <ScrollView>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', top: 75, left: 275,}}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Interactions</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeView')}>
          <Entypo name='chevron-up' size={30} color='white' style={{bottom: 5}} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Comment() {
  return(
    <View style={{width: '90%', backgroundColor: '#282828', height:60, justifyContent: 'center', borderRadius: 10, marginBottom: 10}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{height: 40, width: 40, backgroundColor: 'white', borderRadius: 1000, left: 10, marginRight: 17.5}}>

        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Zayaan Mulla</Text>
          <Text style={{color: 'white', fontSize: 15}}>This is a comment</Text>
        </View>
      </View>
    </View>
  )
}

  function HomeView() {
    const navigation = useNavigation();
    return(
      <View style={{height: '100%', width: '100%', alignItems: 'center', backgroundColor: '#121212'}}>
        <ScrollView alwaysBounceVertical={false} style={{width: '100%', height: '100%', left: 10}}>
          <Post />
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </View>
    )
  }
  
  function Post() {
    const navigation = useNavigation();
    return(
      <View style={{height: 250, width: '90%', backgroundColor: '#121212', borderRadius: 5, marginBottom: 10}}>
        <TouchableOpacity style={{height: '75%', width: '100%', backgroundColor: 'white', borderRadius: 5, alignItems: 'center'}}>
          <Image 
            source={require('./images/adidas.png')}
            style={{width: '50%', height: '100%', alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{bottom: 180, backgroundColor: '#121212', width: 60, alignItems: 'center', borderRadius: 7.5, left: 5}} activeOpacity={0.5}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>BUY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{bottom: 200, backgroundColor: '#121212', width: 60, alignItems: 'center', borderRadius: 7.5, left: 295, flexDirection: 'row', height: 22.5}} activeOpacity={0.5}>
          <FontAwesome name='check' size={20} color='white' style={{marginRight: 2.5, paddingLeft: 5}}/>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>100</Text>
        </TouchableOpacity>
        <View style={{bottom: 42}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, paddingTop: 7.5}}>Adidas Trackpantssssssssssssss</Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, bottom: 20, left: 310}}>$74.99</Text>
          <View style={{flexDirection: 'row', bottom: 20}}>
            <TouchableOpacity style={{flexDirection: 'row', top: 5}} onPress={() => navigation.navigate('Profile')}>
              <View style={{backgroundColor: 'white', height: 20, width: 20, borderRadius: 10, marginRight: 5}}></View>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Zayaan Mulla</Text>
            </TouchableOpacity>
          </View>
          <View style={{bottom: 36, left: 250}}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Interactions</Text>
            <TouchableOpacity style={{bottom: 25, left: 82.5}} onPress={() => navigation.navigate('Details')}>
                <Entypo name='chevron-down' size={30} color='white' />
            </TouchableOpacity>
          </View>
          <View style={{height: 2, backgroundColor: '#282828', width: '100%', bottom: 60}} />
        </View>
      </View>
    )
  }