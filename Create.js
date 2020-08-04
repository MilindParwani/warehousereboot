import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput, CheckBox} from 'react-native';
import { CreatePostDetails } from './CreatePostDetails';
import { CreatePost } from './CreatePost';
import { Header } from './Header';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper'
import { create } from 'react-test-renderer';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    width: '100%'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    width: '100%'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    width: '100%'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    width: '100%'
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    width: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container1: {
    top: 50,
    height: 560,
    position: 'absolute',
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    width: 412
},
container2: {
    top: 50,
    height: 560,
    position: 'absolute',
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    width: 412
},
container3: {
    top: 45,
    height: 610,
    position: 'absolute',
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    width: 412
}
})

function Create1() {
    const navigation = useNavigation();
    return(
        <View style={styles.slide5}>
            <View style={{width: '100%', height: '100%', zIndex: 1}}>
                <View style={{flexDirection: 'row', top: 550, left:7.5}}>
                    <TouchableOpacity style={{width: '11%', marginRight: 75}} activeOpacity={0.5}>
                        <MaterialIcons name='add-circle' color='white' size={45} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '10%', marginRight: 75}} activeOpacity={0.5}>
                        <MaterialIcons name='photo-library' color='white' size={45} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '10%', marginRight: 75}} activeOpacity={0.5}>
                        <MaterialIcons name='photo-camera' color='white' size={45} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '11%'}} activeOpacity={0.5} onPress={() => navigation.navigate('Create2')}>
                        <MaterialIcons name='check-circle' color='white' size={45} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

function Create2() {
    const navigation = useNavigation();
    return(
        <View style={styles.slide1}>
            <View style={{width: '100%', height: '100%'}}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container1}>
                    <View style={{width: '92%', height: 35, backgroundColor: '#282828', borderRadius: 7.5, bottom: 55, justifyContent: 'center'}}>
                        <View style={{justifyContent: 'center',  flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity style={{backgroundColor: '#121212', height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10, right: 12.5}}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>ADDRESS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10}} onPress={() => navigation.navigate('Create3')}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>COMMENT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10}} onPress={() => navigation.navigate('Create4')}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>TITLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, left: 12.5}} onPress={() => navigation.navigate('Create5')}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', left: 51, bottom: 35}}> 
                        <TouchableOpacity style={{width: '46%', height: 40, borderColor: '#282828', borderWidth: 1, justifyContent: 'center'}} activeOpacity={0.5}>
                            <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>PAY ONLINE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: '46%', height: 40, borderColor: '#282828', borderWidth: 1, justifyContent: 'center'}} activeOpacity={0.5}>
                            <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>PAY IN PERSON</Text>
                        </TouchableOpacity>
                    
                        <View style={{flexDirection: 'row'}}>
                            <CheckBox
                                style={{top: 50, right: 385}}
                            />
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', top: 56, right: 385}}>Pay Online</Text>
                        </View>
                    </View>
                    <View style={{width: '92%', height: 225, borderColor: '#282828', borderWidth: 1, top: 10, borderRadius:5}}>
  
                    </View>
                    <View style={{width: '92%', height: 120, borderBottomColor: '#282828', flexDirection: 'column', top: 20}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', left: 10, top: 7.5}}>Seller Address</Text>
                        <Text style={{color: 'white', fontSize: 14, left: 10, top: 20}}>Dubai, UAE</Text>
                        <Text style={{color: 'white', fontSize: 14, left: 10, top: 20}}>The Villa</Text>
                        <Text style={{color: 'white', fontSize: 14, left: 10, top: 20}}>Courtyard 2, Villa 3</Text>
                    </View>
                    <View style={{height: 1, backgroundColor: '#282828', width: '92%', top: 35, zIndex: 1}}/>
                </View>
            </View>
        </View>
    )
}

function Create3() {
    const navigation = useNavigation();
    return(
        <View style={styles.slide2}>
        <View style={{width: '100%', height: '100%'}}>
            <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container2}>
                    <View style={{width: '92%', height: 35, backgroundColor: '#282828', borderRadius: 7.5, bottom: 55, justifyContent: 'center', zIndex: 1}}>
                        <View style={{justifyContent: 'center',  flexDirection: 'row', alignItems: 'center', zIndex: 1}}>
                            <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10, right: 12.5}} onPress={() => navigation.navigate('Create2')}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>ADDRESS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#121212', height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10}}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>COMMENT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10}} onPress={() => navigation.navigate('Create4')}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>TITLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 30, left: 12.5}} onPress={() => navigation.navigate('Create5')}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', bottom: 35}}> 
                        <TouchableOpacity style={{width: '46%', height: 40, borderColor: '#282828', borderWidth: 1, justifyContent: 'center'}} activeOpacity={0.5}>
                            <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>PAY ONLINE</Text>
                        </TouchableOpacity>                    
                        <TouchableOpacity style={{width: '46%', height: 40, borderColor: '#282828', borderWidth: 1, justifyContent: 'center'}} activeOpacity={0.5}>
                            <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>PAY IN PERSON</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{width: '92%', height: 225, borderColor: '#282828', borderWidth: 1, top: 10, right: 0, borderRadius:5}}>

                    </View>
                    <View style={{width: '92%', height: 120, borderBottomColor: '#282828', borderBottomWidth: 1, borderRadius: 5, flexDirection: 'column', top: 35}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', left: 10, bottom: 5}}>Comment for the buyer</Text>
                        <TextInput 
                            style={{color: 'white', fontSize: 14, left: 10, top: 10, paddingRight: 20}}
                            placeholder='Enter your comment for the buyer'
                            placeholderTextColor='#282828'
                            multiline={true}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

function Create4() {
    const navigation = useNavigation();
    return(
        <View style={styles.slide3}>
            <View style={{width: '100%', height: '100%', bottom: 45}}>
                <View style={styles.container3}>
                    <View style={{width: '92%', height: 35, backgroundColor: '#282828', borderRadius: 7.5, top: 155, justifyContent: 'center', zIndex: 1}}>
                        <View style={{justifyContent: 'center',  flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10, right: 12.5}} onPress={() => navigation.navigate('Create2')}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>ADDRESS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10}} onPress={() => navigation.navigate('Create3')}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>COMMENT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#121212', height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10}} >
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>TITLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, left: 12.5}} onPress={() => navigation.navigate('Create5')}>
                                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '100%', left: 20, top: 210, flexDirection: 'column'}}>
                        <CreatePost />
                    </View>
                </View>
            </View>
        </View>
    )
}

function Create5() {
    const navigation = useNavigation();
    return(
        <View style={styles.slide4}>
        <View style={{width: '100%', top: 52.5}}>
            <Header />
        </View>
        <View style={{width: '92%', height: 35, backgroundColor: '#282828', borderRadius: 7.5, top: 17.5, justifyContent: 'center', zIndex: 1}}>
            <View style={{justifyContent: 'center',  flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10, right: 12.5}} onPress={() => navigation.navigate('Create2')}>
                    <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>ADDRESS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, marginRight: 10}} onPress={() => navigation.navigate('Create3')}>
                    <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>COMMENT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 32.5, justifyContent: 'center', width: 80, borderRadius:7.5, marginRight: 10}} onPress={() => navigation.navigate('Create4')}>
                    <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>TITLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#121212', height: 32.5, justifyContent: 'center', width: 80, borderRadius: 7.5, left: 12.5}}>
                    <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>DETAILS</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{height: 1, width: '92%', backgroundColor: '#282828', top: 400}} />
        <View style={{top: 167.5, right: 80}}>
            <CreatePostDetails />
        </View>
        </View>
    )
}

const Stack = createStackNavigator();

export default class SwiperComponent extends Component {
  render() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName='Create2'>
                <Stack.Screen name='Create1' component={Create1} />
                <Stack.Screen name='Create2' component={Create2} />
                <Stack.Screen name='Create3' component={Create3} />
                <Stack.Screen name='Create4' component={Create4} />
                <Stack.Screen name='Create5' component={Create5} />
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}

