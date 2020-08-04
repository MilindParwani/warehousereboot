import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import  { SearchPost } from './SearchPost';
import { Header } from './Header'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators  } from '@react-navigation/stack';
import  SearchView  from './SearchView';
import SearchClick from './SearchClick';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';


function Default() {
    const navigation = useNavigation();
    return(
        <View style={styles.header}>
        <View style={{width: '100%', top: 50}}>
            <Header />
        </View>
        <View style={styles.container}>
            <View style={{top: 5}}>
                <View style={{top: 160}}>
                    <View style={{left: 22}}>
                        <TouchableOpacity style={{bottom: 212, left: 330}} activeOpacity={0.5}>
                            <FontAwesome5Icon name='search' color='white' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{bottom: 240, right: 15, width: '96%', zIndex: 1}}>
                            <TextInput 
                                onTouchStart={() => navigation.navigate('Click')}
                                style={styles.input}
                                placeholder='Search'
                                placeholderTextColor='white'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', left: 155}}>
                        <TouchableOpacity style={styles.search} activeOpacity={0.5}>
                            <Text style={styles.text}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.search} activeOpacity={0.5}>
                            <Text style={styles.text}>Decor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.search} activeOpacity={0.5}>
                            <Text style={styles.text}>Electronics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.search} activeOpacity={0.5}>
                            <Text style={styles.text}>Clothes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.search} activeOpacity={0.5}>
                            <Text style={styles.text}>Sports</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={{flexDirection: 'row', bottom: 60,left: 10, flexDirection: 'row'}} activeOpacity={0.5}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', fontFamily:'normal'}}>Trending</Text>
                        <Entypo name='chevron-right' color='white' size={25} style={{top: 2}} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', top: 120, left: 142}}>
                    <SearchPost />
                    <SearchPost />
                    <SearchPost />
                    <SearchPost />
                </View>
                <View>
                    <TouchableOpacity style={{flexDirection: 'row', bottom: 30,left: 10, flexDirection: 'row'}} activeOpacity={0.5}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', fontFamily:'normal',}}>Sellers Of The Week</Text>
                        <Entypo name='chevron-right' color='white' size={25} style={{top: 2}} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', top: 150, left: 142}}>
                    <SearchPost />
                    <SearchPost />
                    <SearchPost />
                    <SearchPost />
                </View>
                <View>
                    <TouchableOpacity style={{flexDirection: 'row', bottom: 0, left: 10,flexDirection: 'row'}} activeOpacity={0.5}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', fontFamily:'normal',}}>Products Of The Week</Text>
                        <Entypo name='chevron-right' color='white' size={25} style={{top: 2}} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', top: 180, left: 142}}>
                    <SearchPost />
                    <SearchPost />
                    <SearchPost />
                    <SearchPost />
                </View>
            </View>
        </View>
    </View>
    )
}

function Click() {
    const navigation = useNavigation();
    return(
        <View>
            <SearchClick />
            <TouchableOpacity style={{left: 345, top: 85}} onPress={() => navigation.navigate('Default')} activeOpacity={0.5}>
                <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

const Stack = createStackNavigator();

export default class SearchPage extends Component{
    render() {
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}} initialRouteName='Default'>
                    <Stack.Screen name='Default' component={Default} />
                    <Stack.Screen name='Click' component={Click} />
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        fontFamily: 'normal'
    },
    input: {
        width: '100%',
        height: 35,
        borderBottomColor: '#282828',
        borderBottomWidth: 2,
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingBottom: 8
    },
    search: {
        width: 70,
        height: 35,
        borderColor: '#282828',
        backgroundColor: 'transparent',
        borderWidth: 2,
        fontSize: 12,
        borderRadius: 10,
        marginRight: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 230,
        right: 150,
        textAlign: 'center',
        zIndex: 0


    }
})