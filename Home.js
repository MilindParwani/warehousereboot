import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import { PostDetails } from './PostDetails';
import { Header } from './Header'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Create from './Create';
import Search from './Search';
import Message from './Message';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeView from './HomeView';
import Profile from './Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WishlistSwiper from './WishlistSwiper'

const Tab = createBottomTabNavigator();

function MyTabs() {
return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
        showLabel: false,
        activeTintColor: 'white',
        tabStyle: {
            backgroundColor: '#121212',
            bottom: 0,
            height: 50,
            borderTopColor: '#282828',
            borderTopWidth: 1,
            paddingBottom: 10
        }
    }}
    >
    <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
            <FontAwesome5  name='home' color={color} size={25} style={{top: 5}} />
        )
        }}
    />
    <Tab.Screen
        name="Search"
        component={Search}
        options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
            <FontAwesome5  name='search' color={color} size={25} style={{top: 5}}/>
        )
        }}
    />
    <Tab.Screen
        name="Create"
        component={Create}
        options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
            <FontAwesome5  name='plus' color={color} size={25} style={{top: 5}}/>
        )
        }}
    />
    <Tab.Screen
        name="Messages"
        component={Message}
        options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
            <AntDesign  name='mail' color={color} size={30} style={{top: 5}} />
        ),
        }}
    />
    <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
            <FontAwesome5  name='user-circle' color={color} size={25} style={{top: 5}} />
        )
        }}
    />
    </Tab.Navigator>
);
}
  



export default class Home extends Component{
    render() {
        return(
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        )
    }
}

const styles=StyleSheet.create({
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
    }
})
