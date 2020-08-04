import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Header } from './Header'
import IndividualMessage from './individualMessage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import IndividualMessageUI from './individualMessageUI.js';
import Entypo from 'react-native-vector-icons/Entypo'
import App from './TEST.js';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function MessageFTB() {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={{width: '92%', height: 100, bottom: 245, marginTop: 20, backgroundColor: '#282828', borderRadius: 7.5, left: 17.5}} onPress={() => navigation.navigate('Individual')} activeOpacity={0.5}>
            <View style={{width: '100%', height: 75, bottom: 0}}>
                <View style={{height: 50, width: 50, borderRadius: 50, zIndex: 1, backgroundColor: 'white', left: 10, top: 20}}>

                </View>
                <View style={{bottom: 35, left: 75, flexDirection: 'column'}}>
                    <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Milind Parwani</Text>
                </View>
                <View style={{bottom: 5,left: 15}}>
                    <View style={{flexDirection: 'row', bottom: 27.5, left: 60}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginRight: 55}}>Offer</Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginRight: 52.5}}>Date</Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Status</Text>
                    </View>
                    <View style={{flexDirection: 'row', bottom: 27.5, left: 60}}>
                        <Text style={{color: 'white', fontSize: 15, marginRight: 42.5}}>$10.00</Text>
                        <Text style={{color: 'white', fontSize: 15, marginRight: 25}}>12/07/20</Text>
                        <Text style={{color: 'white', fontSize: 15}}>Confirmed</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        
    );
}


function Default({ navigation }) {
    return(
        <View style={styles.header}>
            <View style={{top: 50, width: '100%'}}>
                <Header />
            </View>
            <View style={styles.container}>
                <View style={{top: 202.5, width: '100%', flexDirection:'column'}}>
                    <MessageFTB />
                    <MessageFTB />
                    <MessageFTB />
                    <MessageFTB />
                </View>
            </View>
        </View>
    )
}

function Individual({ navigation }) {
    return(
        <View>
            <IndividualMessage />
        </View>
    )
}

const Stack = createStackNavigator();



export class Message extends Component{
    render() {
        return(
            <NavigationContainer  independent={true}>
                <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true, gestureDirection: 'vertical', cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}} initialRouteName='Default'>
                    <Stack.Screen name='Default' component={Default} />
                    <Stack.Screen name='Individual' component={Individual} />
                    <Stack.Screen name='Message' component={MessageFTB} />
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
        fontSize: 13,
        letterSpacing: 2,
        fontFamily: 'monospace'
    },
    input: {
        width: 325,
        height: 35,
        bottom: 240,
        right: 30,
        borderColor: '#282828',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 15
    },

})

export default Message;