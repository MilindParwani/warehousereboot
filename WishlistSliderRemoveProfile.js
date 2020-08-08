import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import  { ProfilePost } from './ProfilePost';
import { Header } from './Header';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EditProfile from './EditProfile';
import ItemsToSellOnProfile from './ItemsToSellOnProfile';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Wishlist from './Wishlist';
import { Easing } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import { ProfilePostRemove } from './ProfilePostRemove'

function WishlistNav() {
    const navigation = useNavigation();
    return(
        <View style={{width: '100%', height: 395, backgroundColor: '#121212'}}>
            <View style={{backgroundColor: '#282828', width: '92%', height: 40, borderRadius: 7.5, justifyContent: 'center', flexDirection: 'row', left: 15}}>
                <TouchableOpacity style={{height: 35, width: '48%', borderRadius: 7.5, top: 2.5, marginRight: 5}} onPress={() => navigation.navigate('Posts') }>
                    <Text style={styles.text}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 35, width: '48%', backgroundColor: '#121212', borderRadius: 7.5, top: 2.5}}>
                    <Text style={styles.text}>WISHLIST</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function MyPosts() {
    const navigation = useNavigation();
    return(
        <View style={{width: '100%', height: 395, backgroundColor: '#121212'}}>
            <View style={{backgroundColor: '#282828', width: '92%', height: 40, borderRadius: 7.5, justifyContent: 'center', flexDirection: 'row', left: 15}}>
                <TouchableOpacity style={{height: 35, width: '48%',backgroundColor: '#121212', borderRadius: 7.5, top: 2.5, marginRight: 5}}>
                    <Text style={styles.text}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 35, width: '48%', borderRadius: 7.5, top: 2.5}} onPress={() => navigation.navigate('Wishlist')}>
                    <Text style={styles.text}>WISHLIST</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', width: '100%', zIndex: 1, top: 200, left: 145}}>
                <ProfilePostRemove />
                <ProfilePostRemove />
                <ProfilePostRemove />
            </View>
        </View>
    )
}

const Stack = createStackNavigator();


export default class WishlistSliderRemove extends Component{
    render() {
        return(
            <NavigationContainer independent={true} >
                <Stack.Navigator screenOptions={{
                    headerShown: false, 
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    
                    }} 
                    initialRouteName='Posts'>
                    <Stack.Screen  name='Wishlist' component={WishlistNav} />
                    <Stack.Screen name='Posts' component={MyPosts} />
                </Stack.Navigator>
            </NavigationContainer>
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
        top: 60,
        height: 560,
        position: 'absolute',
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        width: 412
    },
    text: {
        top: 7.5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 2,
        fontFamily: 'normal',
        textAlign: 'center'
    }
})