import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import { PostDetails } from './PostDetails';
import { Header } from './Header'; 
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; 
import Profile from './Profile';
import Home from './Home';
import Entypo from 'react-native-vector-icons/Entypo';

function UserPost() {
    const navigation = useNavigation();
    return(
        <View style={styles.post}>
            <TouchableOpacity style={{height: '60%', width: '92%', borderRadius: 20, top: 25, left: 15}} activeOpacity={0.5}>
                <Image 
                    source={require('./images/clothes_test.jpg')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                />
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold',fontSize: 20, color: 'white', top: 35, left: 15, paddingRight: 20}}>piff ting wearing a peng sweater innit bruv, new quality</Text>
            <TouchableOpacity style={{height: 30, width: '75%', top: 50, left: 15}} onPress={() => navigation.navigate('Profile')} activeOpacity={0.5}>
                <View style={{borderRadius: 30, width: 30, height: 30, backgroundColor: 'white', zIndex: 1, left: 5}}>

                </View>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white', bottom: 25, left: 43}}>Milind Parwani</Text>
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 15, left: 280, top: 25, fontWeight: 'bold'}}>Interactions</Text>
            <TouchableOpacity style={{ width: 20, left: 365, top:2.5}} onPress={() => navigation.navigate('Details')} activeOpacity={0.5}>
                <Entypo name='triangle-down' size={25} color='white' />
            </TouchableOpacity>
            <View style={{backgroundColor: '#282828', height: 1, width: '92%', zIndex: 1, left: 15, top:15}} />
            <TouchableOpacity style={{backgroundColor: '#282828', height: 25, width: 80, left: 20, bottom: 320, borderRadius: 8, justifyContent: 'center'}} onPress={() => navigation.navigate('Buy')} activeOpacity={0.5}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>BUY</Text>
            </TouchableOpacity>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 22, left: 310, bottom: 349, borderRadius: 8, width: 75, height: 30, textAlign: 'center'}}>$74.99</Text>
            <View style={{height: 1, backgroundColor: '#282828', width: '92%',bottom: 25, left: 15}}/>
            <TouchableOpacity style={{height: 25, width: 75, left: 313, bottom: 349, borderRadius: 8, justifyContent: 'center'}} activeOpacity={0.5}>
                <FontAwesome5Icon name='plus' size={25} color='black' />
            </TouchableOpacity>
            <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold', left: 340, bottom: 374}}>500</Text>
            
        </View>
    )
}


class Buy extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <View style={{width: '100%', height: '100%', top: 185}}>
                        <View style={{width: '100%', left: 18, bottom: 177.5, flexDirection: 'row'}}>
                            <TouchableOpacity style={{width: '46%', height: 40, borderColor: 'white', borderWidth: 1, justifyContent: 'center'}} activeOpacity={0.5}>
                                <Text style={styles.text}>PAY ONLINE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '46%', height: 40, borderColor: 'white', borderWidth: 1, justifyContent: 'center'}} activeOpacity={0.5}>
                                <Text style={styles.text}>PAY IN PERSON</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderRadius: 10, width: '92%', height: '20%' ,bottom: 160, left: 18}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14,paddingLeft: 7,paddingTop: 5}}>Message from the seller</Text>
                            <Text style={{color: 'white',fontSize: 14,paddingLeft: 7,paddingTop: 7, paddingRight: 7}}>Come during the day, don't ring the doorbell doorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbelldoorbell</Text>
                        </View>
                        <View style={{borderWidth: 1, borderColor: 'white', width: '92%', height: '30%', borderRadius: 10, left: 18, bottom: 37}}>  
                        
                        </View>
                        <View style={{height: 1, backgroundColor: '#282828', width: '92%', bottom: 322, left: 17, zIndex: 1}}/>
                        <View style={{height: 1, backgroundColor: '#282828', width: '92%', bottom: 220, left: 17, zIndex: 1}}/>
                        <View style={{height: 1, backgroundColor: '#282828', width: '92%', bottom: 452, left: 17, zIndex: 1}}/>
                        <View style={{height: 1, backgroundColor: '#282828', width: '92%', bottom: 27, left: 17, zIndex: 1}}/>
                        <View style={{width: '92%', height: 100, borderRadius: 10, bottom: 322, left: 18, flexDirection: 'column'}}>
                            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold', paddingTop: 10, paddingLeft: 10}}>Seller Address</Text> 
                            <Text style={{color: 'white', fontSize: 14,paddingLeft: 10}}>Dubai, UAE</Text> 
                            <Text style={{color: 'white', fontSize: 14, paddingLeft: 10}}>The Villa, Centro</Text> 
                            <Text style={{color: 'white', fontSize: 14,  paddingLeft: 10}}>Courtyard 2, Villa 3</Text> 
                        </View>
                        <TouchableOpacity style={{borderWidth: 1, borderColor: 'white', borderRadius: 10, width: '35%', justifyContent: 'center', alignItems: 'center', bottom: 118, left: 252.5, height: 40}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, textAlign: 'center'}}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

function BuyNav() {
    return(
        <View>
            <Buy />
        </View>
    )

}

function Default() {
    return(
        <View>
            <View style={{top: 50}}>
                <Header />
            </View>
            <ScrollView overScrollMode='never' showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={{width: '100%', left: 20, top: 250, flexDirection: 'column'}}>
                    <UserPost />
                    <UserPost />
                    <UserPost />
                </View>

            </ScrollView>
        </View>
    )
}

function ProfileNav({ navigation }) {
    return(
        <View>
            <ProfileView />
        </View>
    )
}

function PostDetailsNav() {
    const navigation = useNavigation();
    return(
        <View>
            <View style={{top: 50}}>
                <Header />
            </View>
            <View style={{backgroundColor: '#121212', height: '100%', width: '100%', paddingLeft:35, paddingTop: 175}}>
                <TouchableOpacity style={{zIndex: 1, top: 317, left: 325, width: 25}} onPress={() => navigation.navigate('Default')} activeOpacity={0.5}>
                    <Entypo name='triangle-up' color='white' size={25}/>
                </TouchableOpacity>
                <View style={{bottom: 30}}>
                    <TouchableOpacity style={{height: 30, width: '75%', top: 316, right: 12.5, zIndex: 1, flexDirection: 'row'}} onPress={() => navigation.navigate('Profile')} activeOpacity={0.5}>
                        <View style={{borderRadius: 30, width: 30, height: 30, backgroundColor: 'white', zIndex: 1, left: 5, marginRight: 5}}>

                        </View>
                        <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white', left: 10, top: 5}}>Milind Parwani</Text>
                    </TouchableOpacity>
                    <View style={{bottom: 30}}>
                        <PostDetails />
                    </View>
                </View>
            </View>
        </View>
    )
}


const Stack = createStackNavigator();


export default class HomeView extends Component{
    render() {
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS}} initialRouteName='Default'>
                    <Stack.Screen name='Default' component={Default} />
                    <Stack.Screen name='Buy' component={BuyNav} />
                    <Stack.Screen name='Profile' component={ProfileNav} />
                    <Stack.Screen name='Details' component={PostDetailsNav} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        top: 50,
        height: 565,
        position: 'absolute',
        backgroundColor: '#121212',
        width: 412
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 2,
        fontFamily: 'monospace',
        textAlign: 'center'
    },
    post: {
        backgroundColor: '#121212',
        height: 370,
        width: '100%',
        bottom: 250,
        right: 20,
    },
})