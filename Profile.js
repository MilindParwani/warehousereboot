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
import WishlistSlider from './WishlistSlider';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
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
        <View style={{flex: 1, backgroundColor: '#121212'}}>
            <View style={{zIndex: 1, top: 50}}>
                <Header />
            </View>
            <View style={{flexDirection:'column', zIndex: 1, width: '100%', height: 482.5, top: 25, paddingTop: 30}}>
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

class About extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <AboutS />
                </View>
            </View>
        )
    }
}

function AboutS() {
    return(
        <View style={{height: '100%', width: '100%', top: 50}}>
            <View>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 10, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>TERMS AND CONDITIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 20, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>PRIVACY POLICY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 30, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>LEGAL</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

class Account extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <AccountS />
                </View>
            </View>
        )
    }
}

function AccountS() {
    return(
        <View style={{height: '100%', width: '100%', top: 50}}>
            <View>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 10, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>CHANGE ACCOUNT DETAILS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 20, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>LANGUAGE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 30, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>CONNECTED ACCOUNTS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

class Help extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <HelpS />
                </View>
            </View>
        )
    }
}

function HelpS() {
    return(
        <View style={{height: '100%', width: '100%', top: 50}}>
            <View>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 20, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>FREQUENTLY ASKED QUESTIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 30, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>GIVE US SOME FEEDBACK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 40, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>REPORT A BUG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

class Preferences extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <PreferencesS />
                </View>
            </View>
        )
    }
}

function PreferencesS() {
    return(
        <View style={{height: '100%', width: '100%', top: 50}}>
            <View>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 20, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>LIGHT OR DARK MODE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 30, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>LOCATION SETTINGS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 40, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>ACCOUNT TYPE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

class Payment extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <PaymentSettings />
                </View>
            </View>
        )
    }
}

function PaymentSettings() {
    return(
        <View style={{height: '100%', width: '100%', top: 50}}>
            <View>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 10, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>UPCOMING TRANSACTIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 20, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>PREVIOUS TRANSACTIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 30, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>PAYMENT METHODS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

class Notifications extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <NotificationsS />
                </View>
            </View>
        )
    }
}

function NotificationsS() {
    return(
        <View style={{height: '100%', width: '100%', top: 50}}>
            <View>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 10, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>ON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 20, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>OFF</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 30, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>MANAGE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

class Privacy extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <PrivacyS />
                </View>
            </View>
        )
    }
}

function PrivacyS() {
    return(
        <View style={{height: '100%', width: '100%', top: 50}}>
            <View>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 10, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>ADS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 20, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>PEOPLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 30, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>INTERACTIONS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

class Security extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <SecurityS />
                </View>
            </View>
        )
    }
}


function SecurityS() {
    return(
        <View style={{height: '100%', width: '100%', top: 50}}>
            <View>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 10, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>DATA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 20, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>LOGIN ACTIVITY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '90%', height: '27%', backgroundColor: '#282828', borderRadius: 20, left: 18, top: 30, justifyContent: 'center', alignItems: 'center', fontFamily: 'normal'}}>
                    <Text style={{fontSize: 15, color: 'white', fontFamily: 'normal', fontWeight: 'bold', letterSpacing: 1}}>2FA AUTHENTICATION</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

class ProfileView extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={{zIndex: 0, left: 7.5}}>
                    <View style={{backgroundColor: 'white', width: 50, height: 50, borderRadius: 50, right: 165, top: 20}}>

                    </View>
                </View>
                <View style={{top: 55, right: 82.5}}>
                    <View style={{flexDirection: 'row', bottom: 190, right: 20}}>
                        <View style={{zIndex: 1, width: 60, height: 30, top: 135, left: 25}}>
                            <Text style={{color: 'white', fontFamily: 'normal', fontWeight: 'bold', fontSize: 16}}>4.61</Text>
                        </View>
                        <MaterialCommunityIcons name='star' color='white' size={20} style={{top: 135}} />                    
                    </View>
                    <View style={{left: 5, bottom: 118}}>
                        <Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>MILIND</Text>
                    </View>
                </View>
                <View style={{top: 155, right: 120, zIndex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65, marginRight: 25, paddingBottom:5}}>Following</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65, marginRight: 25}}>Followers</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65}}>Category</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 182, left: 65, marginRight: 25, paddingTop: 5, paddingLeft: 18}}>480</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 182, left: 65, marginRight: 25, paddingTop: 5, paddingLeft: 42}}>412</Text>
                        <View style={{flexDirection: 'row', bottom: 177.5, left: 85}}>
                            <Ionicons name='shirt' size={17.5} color='white' style={{marginRight: 8, top: 2.5}} />
                            <MaterialCommunityIcons name='soccer' size={22} color='white' style={{marginRight: 2.5}}/>
                            <Feather name='plus' size={22.5} color='white' />
                        </View>
                    </View>
                </View>
                <View style={{width: '100%', zIndex: 1, height: 510}}>
                    <WishlistSlider />
                </View>
            </View>
        )
    }
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