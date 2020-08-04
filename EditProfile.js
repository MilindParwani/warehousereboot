import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import  { ProfilePostRemove } from './ProfilePostRemove';
import { Header } from './Header';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WishlistSlider from './WishlistSlider';
import WishlistSliderRemove from './WishlistSliderRemoveProfile';

export default class EditProfile extends Component{
    render() {
        return(
            <View style={styles.header}>
                <View style={{top: 50, width: '100%'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <View style={{top: 110, right: 75}}>
                        <View style={{top: 100, right: 55}}>
                            <View style={{bottom: 40}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{borderRadius: 50, width: 50, height: 50, backgroundColor: 'white', zIndex: 1, left: 75, bottom: 140}}>

                                    </View>
                                <View style={{bottom: 57, left: 82 }}>
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
                            </View>
                            </View>
                            <View style={{top: 5, left: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65, marginRight: 25, paddingBottom:5}}>Following</Text>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65, marginRight: 25}}>Followers</Text>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 175, left: 65}}>Category</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 182, left: 65, marginRight: 25, paddingTop: 5, paddingLeft: 18}}>480</Text>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, color: 'white', bottom: 182, left: 65, marginRight: 25, paddingTop: 5, paddingLeft: 42}}>412</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{width: '100%', zIndex: 1, height: 510, top: 60}}>
                        <WishlistSliderRemove />
                    </View>

                </View>
            </View>
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
        top: 75,
        height: 560,
        position: 'absolute',
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        width: 412
    },
    text: {
        top: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 2,
        fontFamily: 'normal'
    }
})