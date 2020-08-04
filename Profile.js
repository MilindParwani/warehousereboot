import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import  { ProfilePost } from './ProfilePost';
import { Header } from './Header';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import SettingsView from './SettingsView';
import ProfileView  from './ProfileView';
import  Payment  from './Payment';
import  Privacy  from './Privacy';
import  Notifications  from './Notifications';
import  Security  from './Security';
import  Preferences  from './Preferences';
import  Account  from './Account';
import  Help  from './Help';
import  About  from './About';
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

function SellerItems({ navigation }) {
    return(
        <View>
            <TouchableOpacity style={{zIndex: 1, top:70, left: 350}} onPress={() => navigation.navigate('EditProfileNav')} activeOpacity={0.5} >
                <FontAwesome5 name='check-circle' size={50} color='white' />
            </TouchableOpacity>
            <ItemsToSellOnProfile />
        </View>
    )
}


function EditProfileNav({ navigation }) {
    return(
        <View>
            <TouchableOpacity style={{zIndex: 1, top:72.5, left: 345}} onPress={() => navigation.navigate('Default')} activeOpacity={0.5} >
                <Ionicons name='checkmark' size={50} color='white' />
            </TouchableOpacity>
            <TouchableOpacity style={{zIndex: 1, top:120, left: 205, borderWidth: 1, borderColor: '#282828', height: 20, width: 80, justifyContent: 'center'}} onPress={() => navigation.navigate('SellerItems')} activeOpacity={0.5} >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>SELECT</Text>
            </TouchableOpacity>
            <EditProfile />
        </View>
    )
}

function PaymentNav({ navigation }) {
    return(
        <View>
            <Payment />
        </View>
    )
}

function PrivacyNav({ navigation }) {
    return(
        <View>
            <Privacy />
        </View>
    )
}

function NotificationsNav({ navigation }) {
    return(
        <View>
            <Notifications />
            
        </View>
    )
}

function SecurityNav({ navigation }) {
    return(
        <View>
            <Security />
        </View>
    )
}

function PreferencesNav({ navigation }) {
    return(
        <View>
            <Preferences />
        </View>
    )
}

function AccountNav({ navigation }) {
    return(
        <View>
            <Account />
        </View>
    )
}

function HelpNav({ navigation }) {
    return(
        <View>
            <Help />
        </View>
    )
}

function AboutNav({ navigation }) {
    return(
        <View>
            <About />
        </View>
    )
}

function SettingsNav({ navigation }) {
    return(
        <View>
            <SettingsView />
            <View style={{flexDirection:'column', zIndex: 1, width: '100%', height: 482.5, top: 67.5, paddingTop: 30}}>
                <TouchableOpacity style={{zIndex: 1, width: '100%', height: 50, flexDirection: 'row',borderBottomColor:'#282828', borderBottomWidth: 1, borderTopWidth: 1, borderTopColor: '#282828', alignItems: 'center'}} onPress={() => navigation.navigate('PaymentNav')}>
                    <MaterialCommunityIcons name='cash-usd' size={25} color='white' style={{left: 10, marginRight: 15}} />
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50,flexDirection: 'row',zIndex: 1, borderBottomColor:'#282828', borderBottomWidth: 1, alignItems: 'center'}} onPress={() => navigation.navigate('PrivacyNav')} activeOpacity={0.5}>
                    <MaterialCommunityIcons name='lock' size={25} color='white' style={{left: 10, marginRight: 15}}/>
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16}}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', zIndex: 1, borderBottomColor:'#282828', borderBottomWidth: 1, alignItems: 'center'}} onPress={() => navigation.navigate('NotificationsNav')} activeOpacity={0.5}>
                    <MaterialCommunityIcons name='bell' size={25} color='white' style={{left: 10, marginRight: 15}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16}}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row',  zIndex: 1, borderBottomColor:'#282828', borderBottomWidth: 1, alignItems: 'center'}} onPress={() => navigation.navigate('SecurityNav')} activeOpacity={0.5}>
                    <MaterialCommunityIcons name='shield-alert' size={25} color='white' style={{left: 10, marginRight: 17.5}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16}}>Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', zIndex: 1, borderBottomColor:'#282828', borderBottomWidth: 1, alignItems: 'center'}} onPress={() => navigation.navigate('PreferencesNav')} activeOpacity={0.5}>
                    <MaterialCommunityIcons name='lightbulb' size={25} color='white' style={{left: 10, marginRight: 17.5}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16}}>Preferences</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', zIndex: 1, borderBottomColor:'#282828', borderBottomWidth: 1, alignItems: 'center'}} onPress={() => navigation.navigate('AccountNav')} activeOpacity={0.5}>
                    <FontAwesome5  name='user-circle' color={'white'} size={22.5}  style={{left: 11, marginRight: 20}}/>
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16}}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50,  zIndex: 1, borderBottomColor:'#282828', borderBottomWidth: 1, alignItems: 'center', flexDirection: 'row'}} onPress={() => navigation.navigate('HelpNav')} activeOpacity={0.5}>
                    <MaterialCommunityIcons name='help-circle' size={25} color='white' style={{left: 10, marginRight: 19}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16}}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', zIndex: 1, borderBottomColor:'#282828', borderBottomWidth: 1, alignItems: 'center'}} onPress={() => navigation.navigate('AboutNav')} activeOpacity={0.5}>
                    <MaterialCommunityIcons name='information' size={25} color='white' style={{left: 10, marginRight: 18}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16}}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, borderBottomColor:'#282828', borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center'}} activeOpacity={0.5}>
                    <MaterialCommunityIcons name='logout-variant' size={25} color='white' style={{left: 10, marginRight: 17.5}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16}}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function Default({ navigation }) {
    return(
        <View style={{bottom: 50}}>
            <View style={{top: 40}}>
                <TouchableOpacity style={{ backgroundColor: '#282828',left: 352.5,top: 105, width: 50, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 20, zIndex: 1}} onPress={() => navigation.navigate('Settings')} activeOpacity={0.5}>
                    <Ionicons name='md-settings-outline' color='white' size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#282828',left: 352.5,top: 50, width: 50, height: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20, zIndex: 1}} onPress={() => navigation.navigate('EditProfileNav')} activeOpacity={0.5}>
                    <Text style={{color: 'white', fontSize: 20, bottom: 7.5}}>...</Text>
                </TouchableOpacity>
            </View>
            <View>
                <ProfileView />
            </View>
        </View>
    )
}

function WishlistNav() {
    const navigation = useNavigation();
    return(
        <View style={{width: '100%', height: 392.5, backgroundColor: '#121212', top: 220}}>
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
        <View style={{width: '100%', height: 392.5, backgroundColor: '#121212', top: 220}}>
            <View style={{backgroundColor: '#282828', width: '92%', height: 40, borderRadius: 7.5, justifyContent: 'center', flexDirection: 'row', left: 15}}>
                <TouchableOpacity style={{height: 35, width: '48%',backgroundColor: '#121212', borderRadius: 7.5, top: 2.5, marginRight: 5}}>
                    <Text style={styles.text}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 35, width: '48%', borderRadius: 7.5, top: 2.5}} onPress={() => navigation.navigate('Wishlist')}>
                    <Text style={styles.text}>WISHLIST</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };


const Stack = createStackNavigator();


export default class Profile extends Component{
    render() {
        return(
            <NavigationContainer independent={true} >
                <Stack.Navigator screenOptions={{
                    headerShown: false, 
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    
                    }} 
                    initialRouteName='Default'>
                    <Stack.Screen  name='Settings' component={SettingsNav} />
                    <Stack.Screen  name='Default' component={Default} />
                    <Stack.Screen  name='PaymentNav' component={PaymentNav} />
                    <Stack.Screen  name='PrivacyNav' component={PrivacyNav} />
                    <Stack.Screen  name='NotificationsNav' component={NotificationsNav} />
                    <Stack.Screen  name='SecurityNav' component={SecurityNav} />
                    <Stack.Screen  name='PreferencesNav' component={PreferencesNav} />
                    <Stack.Screen  name='AccountNav' component={AccountNav} />
                    <Stack.Screen  name='HelpNav' component={HelpNav} />
                    <Stack.Screen  name='AboutNav' component={AboutNav} />
                    <Stack.Screen  name='EditProfileNav' component={EditProfileNav} />
                    <Stack.Screen  name='SellerItems' component={SellerItems} />
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