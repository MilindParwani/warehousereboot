import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo' ;
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home() {
    return(
      <View style={{height: '100%', width: '97.5%', alignItems: 'center', top: 60, left: 10}}>
        <TouchableOpacity style={{width: 50, height: 50, backgroundColor: '#282828', borderRadius: 25, justifyContent: 'center', alignItems: 'center', zIndex: 1, position: 'absolute', left: 340, top: 490}} activeOpacity={0.5}>
          <EvilIcons name='pencil' size={45} color='white' />
        </TouchableOpacity>
        <ScrollView alwaysBounceVertical={false} style={{width: '100%', height: '100%', left: 10}}>
          <Post />
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </View>
    )
  }
  
  function Post() {
    return(
      <View style={{height: 250, width: '90%', backgroundColor: '#121212', borderRadius: 5, marginBottom: 10}}>
        <TouchableOpacity style={{height: '75%', width: '100%', backgroundColor: 'white', borderRadius: 5, alignItems: 'center'}}>
          <Image 
            source={require('./images/adidas.png')}
            style={{width: '50%', height: '100%', alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{bottom: 180, backgroundColor: '#121212', width: 60, alignItems: 'center', borderRadius: 7.5, left: 5}} activeOpacity={0.5}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>BUY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{bottom: 200, backgroundColor: '#121212', width: 60, alignItems: 'center', borderRadius: 7.5, left: 295, flexDirection: 'row', height: 22.5}} activeOpacity={0.5}>
          <FontAwesome name='check' size={20} color='white' style={{marginRight: 2.5, paddingLeft: 5}}/>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>100</Text>
        </TouchableOpacity>
        <View style={{bottom: 42}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, paddingTop: 7.5}}>Adidas Trackpants</Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, bottom: 20, left: 310}}>$74.99</Text>
          <View style={{flexDirection: 'row', bottom: 20}}>
            <TouchableOpacity style={{flexDirection: 'row', top: 5}}>
              <View style={{backgroundColor: 'white', height: 20, width: 20, borderRadius: 10, marginRight: 5}}></View>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Zayaan Mulla</Text>
            </TouchableOpacity>
          </View>
          <View style={{bottom: 36, left: 250}}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Interactions</Text>
            <TouchableOpacity style={{bottom: 25, left: 82.5}}>
                <Entypo name='chevron-down' size={30} color='white' />
            </TouchableOpacity>
          </View>
          <View style={{height: 2, backgroundColor: '#282828', width: '100%', bottom: 60}} />
        </View>
      </View>
    )
  }