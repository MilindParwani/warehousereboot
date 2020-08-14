import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo' ;
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';    
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, NavigationRouteContext } from '@react-navigation/native';

const Stack = createStackNavigator();

export default class Profile extends Component {
    render() {
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName='Default' screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
                    <Stack.Screen name='Default' component={Default} />
                    <Stack.Screen name='Edit' component={EditProfile} />
                    <Stack.Screen name='Settings' component={Settings} />
                    <Stack.Screen name='Payment' component={Payment} />
                    <Stack.Screen name='Privacy' component={Privacy} />
                    <Stack.Screen name='Notifications' component={Notifications} />
                    <Stack.Screen name='Security' component={Security} />
                    <Stack.Screen name='Preferences' component={Preferences} />
                    <Stack.Screen name='Account' component={Account} />
                    <Stack.Screen name='Help' component={Help} />
                    <Stack.Screen name='About' component={About} />
                    <Stack.Screen name='Items' component={ItemsOnProfile} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

function Settings() {
    const navigation = useNavigation();
    return(
        <View style={{flex: 1, backgroundColor: '#121212'}}>
            <View style={{flexDirection: 'column'}}>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white'}} onPress={() => navigation.navigate('Payment')}>
                    <MaterialCommunityIcons name='cash-usd' size={25} color='white' style={{left: 10, marginRight: 15, top: 12.5}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16, textAlignVertical: 'center'}}>Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white'}} onPress={() => navigation.navigate('Privacy')}>
                    <MaterialCommunityIcons name='lock' size={25} color='white' style={{left: 10, marginRight: 15, top: 12.5}}/>
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16, textAlignVertical: 'center'}}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white'}} onPress={() => navigation.navigate('Notifications')}>
                    <MaterialCommunityIcons name='bell' size={25} color='white' style={{left: 10, marginRight: 15, top: 12.5}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16, textAlignVertical: 'center'}}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white'}} onPress={() => navigation.navigate('Security')}>
                    <MaterialCommunityIcons name='shield-alert' size={25} color='white' style={{left: 10, marginRight: 17.5, top: 12.5}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16, textAlignVertical: 'center'}}>Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white'}} onPress={() => navigation.navigate('Preferences')}>
                    <MaterialCommunityIcons name='lightbulb' size={25} color='white' style={{left: 10, marginRight: 17.5, top: 12.5}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16, textAlignVertical: 'center'}}>Preferences</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white'}} onPress={() => navigation.navigate('Account')}>
                    <FontAwesome5  name='user-circle' color={'white'} size={22.5}  style={{left: 11, marginRight: 20, top: 12.5}}/>
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16, textAlignVertical: 'center'}}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white'}} onPress={() => navigation.navigate('Help')}>
                    <MaterialCommunityIcons name='help-circle' size={25} color='white' style={{left: 10, marginRight: 19, top: 12.5}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16, textAlignVertical: 'center'}}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white'}} onPress={() => navigation.navigate('About')}>
                    <MaterialCommunityIcons name='information' size={25} color='white' style={{left: 10, marginRight: 18, top: 12.5}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16, textAlignVertical: 'center'}}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row'}}>
                    <MaterialCommunityIcons name='logout-variant' size={25} color='white' style={{left: 10, marginRight: 17.5, top: 12.5}} />
                    <Text style={{fontWeight: 'bold', fontFamily: 'normal', color: 'white', fontSize: 16, textAlignVertical: 'center'}}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function Payment() {
    return(
        <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center'}}>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>UPCOMING TRANSACTIONS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>PREVIOUS TRANSACTIONS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>PAYMENT METHODS</Text>
            </TouchableOpacity>
        </View>
    )
}

function Privacy() {
    return(
        <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center'}}>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>ADS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>PEOPLE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>INTERACTIONS</Text>
            </TouchableOpacity>
        </View>
    )
}

function Notifications() {
    return(
        <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center'}}>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>ON</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>OFF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>MANAGE</Text>
            </TouchableOpacity>
        </View>
    )
}

function Security() {
    return(
        <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center'}}>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>DATA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>LOGIN ACTIVITY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>2FA AUTHENTICATION</Text>
            </TouchableOpacity>
        </View>
    )
}

function Preferences() {
    return(
        <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center'}}>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>LIGHT OR DARK MODE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>LOCATION SETTINGS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>ACCOUNT TYPE</Text>
            </TouchableOpacity>
        </View>
    )
}

function Account() {
    return(
        <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center'}}>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>CHANGE ACCOUNT DETAILS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>LANGUAGE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>CONNECTED ACCOUNTS</Text>
            </TouchableOpacity>
        </View>
    )
}

function Help() {
    return(
        <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center'}}>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>FREQUENTLY ASKED QUESTIONS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>GIVE US SOME FEEDBACK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>REPORT A BUG</Text>
            </TouchableOpacity>
        </View>
    )
}

function About() {
    return(
        <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'center'}}>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>TERMS AND CONDITIONS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>PRIVACY POLICY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: '27%', width: '80%', backgroundColor: '#282828', right: 10, borderRadius: 10, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', fontSize: 15}}>LEGAL</Text>
            </TouchableOpacity>
        </View>
    )
}

  function Default() {
      const navigation = useNavigation();
      return(
        <View style={{height: '100%', width: '100%', alignItems: 'center', backgroundColor: '#121212'}}>
            <View style={{flexDirection: 'row', right: 67.5}}>
                <View style={{height: 75, width: 75, backgroundColor: 'white', borderRadius: 37.5, marginRight: 10, top: 10}}>
                    <Image 
                        source={require('./images/clothes_test.jpg')}
                        style={{width: '100%', height: '100%', borderRadius: 37.5}}
                    />
                </View>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, left: 5}}>Zayaan</Text>
                <View style={{flexDirection: 'row', right: 95, top: 35, right: 75}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginRight: 5}}>4.61</Text>
                    <Entypo name='star' color='#282828' size={20} style={{top: 2}} />
                </View>
            </View>
            <View style={{flexDirection: 'column', left: 150, bottom: 70}}>
                <TouchableOpacity style={{backgroundColor: '#282828', width: 60, height: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 5}} activeOpacity={0.5} onPress={() => navigation.navigate('Settings')}>
                    <Feather name='settings' size={20} color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#282828', width: 60, height: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => navigation.navigate('Edit')}>
                    <AntDesign name='ellipsis1' size={20} color='white' />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', bottom: 122.5, left: 50}}>
                <MaterialCommunityIcons name='tshirt-crew' color='#282828' size={20} style={{marginRight: 5}} />
                <MaterialCommunityIcons name='cellphone' color='#282828' size={20} style={{marginRight: 5}} />
                <MaterialCommunityIcons name='soccer' color='#282828' size={20} />
            </View>
            <View style={{flexDirection: 'row', bottom: 85, right:30}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 5}}>Followers</Text>
                <Text style={{color: '#282828', fontSize: 20}}>1m</Text>
            </View>
            <TouchableOpacity style={{width: '90%', height: 30, backgroundColor: '#52B2BF', zIndex:1, bottom: 60, borderRadius: 5, justifyContent:'center',alignItems: 'center'}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize: 15}}>Follow</Text>
            </TouchableOpacity>
            <View style={{zIndex: 1, height: '100%', width: '100%', bottom: 30, right: 5}}>
                <Slider />
            </View>
        </View> 
      )
  }

  function EditProfile() {
    const navigation = useNavigation();
    return(
      <View style={{height: '100%', width: '100%', alignItems: 'center', backgroundColor: '#121212'}}>
          <View style={{flexDirection: 'row', right: 67.5}}>
              <View style={{height: 75, width: 75, backgroundColor: 'white', borderRadius: 37.5, marginRight: 10, top: 10}}>
                  <Image 
                      source={require('./images/clothes_test.jpg')}
                      style={{width: '100%', height: '100%', borderRadius: 37.5}}
                  />
              </View>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, left: 5}}>Zayaan</Text>
              <View style={{flexDirection: 'row', right: 95, top: 35, right: 75}}>
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginRight: 5}}>4.61</Text>
                  <Entypo name='star' color='#282828' size={20} style={{top: 2}} />
              </View>
          </View>
          <View style={{flexDirection: 'column', left: 150, bottom: 70}}>
              <TouchableOpacity style={{backgroundColor: '#282828', width: 60, height: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center', top: 25}} activeOpacity={0.5} onPress={() => navigation.navigate('Default')}>
                  <AntDesign name='check' size={20} color='white' />
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', bottom: 90, left: 50}}>
              <MaterialCommunityIcons name='tshirt-crew' color='#282828' size={20} style={{marginRight: 5}} />
              <MaterialCommunityIcons name='cellphone' color='#282828' size={20} style={{marginRight: 5}} />
              <MaterialCommunityIcons name='soccer' color='#282828' size={20} />
          </View>
          <View style={{flexDirection: 'row', bottom: 55, right:30}}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 5}}>Followers</Text>
              <Text style={{color: '#282828', fontSize: 20}}>1m</Text>
          </View>
          <TouchableOpacity style={{width: '90%', height: 30, backgroundColor: '#52B2BF', zIndex:1, bottom: 30, borderRadius: 5, justifyContent:'center',alignItems: 'center'}}>
              <Text style={{color:'white', fontWeight:'bold', fontSize: 15}}>Follow</Text>
          </TouchableOpacity>
          <View style={{zIndex: 1, height: '100%', width: '100%'}}>
              <EditSlider />
          </View>
      </View> 
    )
}

  function ItemsOnProfile() {
      const navigation = useNavigation();
      return(
          <View style={{flex: 1, backgroundColor: '#121212', justifyContent: 'center'}}>
              <TouchableOpacity style={{width: '90%', height: 40, left: 12.5, borderColor: 'white', borderWidth: 1, top: 20, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('Edit')}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>CONFIRM</Text>
              </TouchableOpacity>
            <View style={{width: '100%', height: '100%', flexWrap: 'wrap', flexDirection: 'row', left: 6, top: 50}}>
                <TouchableOpacity style={{backgroundColor: '#282828', width: '45%', height: '35%', borderRadius: 5, marginRight: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <MaterialIcons name='phone-iphone' color='white' size={100} style={{marginBottom: 25}} />
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>ELECTRONICS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#282828', width: '45%', height: '35%', borderRadius: 5, marginRight: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <MaterialCommunityIcons name='lava-lamp' size={100} style={{marginBottom: 25}} color='white' />
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>DECOR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#282828', width: '45%', height: '35%', borderRadius: 5, marginRight: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <MaterialCommunityIcons name='tshirt-crew' size={100} color='white' style={{marginBottom: 25}} />
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>CLOTHING</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#282828', width: '45%', height: '35%', borderRadius: 5, marginRight: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <MaterialCommunityIcons name='soccer' color='white' size={100} style={{marginBottom: 25}}/>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>SPORTS</Text>
                </TouchableOpacity>
            </View>
          </View>
      )
  }
  

  function Posts() {
    const navigation = useNavigation();
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#121212', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', width: '100%', height: 75, left: 5, bottom: 10}}>
                <TouchableOpacity style={{height: 50, width: '50%', justifyContent: 'center', borderRightColor: '#282828', borderRightWidth: 2}}>
                    <Text style={{textAlign: 'center', fontSize: 15, color: 'white', fontWeight: 'bold', letterSpacing: 2}}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, width: '50%', justifyContent: 'center'}} onPress={() => navigation.navigate('Wishlist')}>
                    <Text style={{textAlign: 'center', fontSize: 15, color: 'white', letterSpacing: 2}}>WISHLIST</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', left: 7.5, top: 25, alignItems: 'center', justifyContent: 'center', left: 15}}>
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
    const navigation = useNavigation();
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#121212', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', width: '100%', height: 75,left:5 , bottom: 10}}>
                <TouchableOpacity style={{height: 50, width: '50%', justifyContent: 'center', borderRightColor: '#282828', borderRightWidth: 2}}  onPress={() => navigation.navigate('Posts')}>
                    <Text style={{textAlign: 'center', fontSize: 15, color: 'white', letterSpacing: 2}}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, width: '50%', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 15, color: 'white', letterSpacing: 2, fontWeight: 'bold'}}>WISHLIST</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', left: 10, top: 25, alignItems: 'center', justifyContent: 'center'}}>
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



export class Slider extends Component {
    render() {
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                
                }} initialRouteName='Posts'>
                    <Stack.Screen name='Posts' component={Posts} />
                    <Stack.Screen name='Wishlist' component={Wishlist} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

function EditPosts() {
    const navigation = useNavigation();
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#121212', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', width: '100%', height: 75}}>
                <TouchableOpacity style={{height: 50, width: '50%', justifyContent: 'center', borderRightColor: '#282828', borderRightWidth: 2}}>
                    <Text style={{textAlign: 'center', fontSize: 15, color: 'white', fontWeight: 'bold', letterSpacing: 2}}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, width: '50%', justifyContent: 'center'}} onPress={() => navigation.navigate('Wishlist')}>
                    <Text style={{textAlign: 'center', fontSize: 15, color: 'white', letterSpacing: 2}}>WISHLIST</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', left: 7.5, top: 25, alignItems: 'center', justifyContent: 'center'}}>
                <EditPost />
                <EditPost />
                <EditPost />
                <EditPost />
                <EditPost />
                <EditPost />
            </View>
        </View>
    )
}

function EditWishlist() {
    const navigation = useNavigation();
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#121212', alignItems: 'center'}}>
            <View style={{height: 2, width: '90%', backgroundColor: '#49cabd'}} />
            <View style={{flexDirection: 'row', width: '100%', height: 75}}>
                <TouchableOpacity style={{height: 75, width: '50%', justifyContent: 'center'}}  onPress={() => navigation.navigate('Posts')}>
                    <Text style={{textAlign: 'center', fontSize: 25, color: 'white', letterSpacing: 2}}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 75, width: '50%', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 25, color: 'white', letterSpacing: 2, fontWeight: 'bold'}}>WISHLIST</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 2, width: '90%', backgroundColor: '#49cabd'}} />
            <View style={{flexDirection: 'row', flexWrap: 'wrap', left: 10, top: 25, alignItems: 'center', justifyContent: 'center'}}>
                <EditPost />
                <EditPost />
                <EditPost />
                <EditPost />
                <EditPost />
                <EditPost />
            </View>
        </View>
    )
}

function EditPost() {
    return(
        <View style={{backgroundColor: 'white', borderRadius: 5, height: 110, width: 110, marginRight: 15, marginBottom: 15}}>
            <TouchableOpacity style={{backgroundColor: 'red', width: 40, height: 40, borderRadius: 25, justifyContent: 'center', left: 80, bottom: 10, alignItems: 'center'}} activeOpacity={0.5}>
                <AntDesign name='minus' color='white' size={30} />
            </TouchableOpacity>
        </View>
    )
}



class EditSlider extends Component {
    render() {
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                
                }} initialRouteName='Posts'>
                    <Stack.Screen name='Posts' component={EditPosts} />
                    <Stack.Screen name='Wishlist' component={EditWishlist} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

