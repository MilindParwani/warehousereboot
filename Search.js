import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo' ;
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Search() {
    return(
      <View style={{height: '100%', width: '97.5%', alignItems: 'center', flexDirection: 'column', top: 60}}>
          <TextInput 
            placeholder='Search'
            placeholderTextColor='white'
            style={{width: '95%', borderColor: '#282828', borderWidth: 2,  borderRadius: 5, paddingLeft: 10, fontWeight: 'bold', color: 'white', height: 30, marginBottom: 20, fontSize:12.5, paddingBottom: 7.5}}
          />
          <View style={{flexDirection: 'row', bottom: 7.5}}>
            <TouchableOpacity style={{width: 65, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#282828', borderWidth: 2, marginRight: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Gaming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 65, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#282828', borderWidth: 2, marginRight: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Decor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 80, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#282828', borderWidth: 2, marginRight: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 65, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#282828', borderWidth: 2, marginRight: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Clothing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 65, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#282828', borderWidth: 2,  marginRight: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Sports</Text>
            </TouchableOpacity>
          </View>
        <TouchableOpacity style={{right: 120, top: 5, flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', marginBottom:20}}>Trending</Text>
            <Entypo name='chevron-right' size={30} color='white' style={{top: 2.5}} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', zIndex: 1, left: 15, marginBottom: 20}}>
            <ScrollView horizontal={true}>
                <SearchPost />
                <SearchPost />
                <SearchPost />
                <SearchPost />
                <SearchPost />
                <SearchPost />
            </ScrollView>
        </View>
        <TouchableOpacity style={{right: 45, flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', marginBottom:20}}>Products Of The Week</Text>
            <Entypo name='chevron-right' size={30} color='white' style={{top: 2.5}} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', zIndex: 1, left: 15, marginBottom: 20}}>
            <ScrollView horizontal={true}>
                <SearchPost />
                <SearchPost />
                <SearchPost />
                <SearchPost />
                <SearchPost />
                <SearchPost />
            </ScrollView>
        </View>
        <TouchableOpacity style={{right: 55, flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', marginBottom:20}}>Sellers Of The Week</Text>
            <Entypo name='chevron-right' size={30} color='white' style={{top: 2.5}} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', zIndex: 1, left: 15, marginBottom: 20}}>
            <ScrollView horizontal={true}>
                <SearchPost />
                <SearchPost />
                <SearchPost />
                <SearchPost />
                <SearchPost />
                <SearchPost />
            </ScrollView>
        </View>

        </View>
    )
  }

  function SearchPost() {
      return(
          <TouchableOpacity style={{width: 90, height: 90, backgroundColor: 'white', borderRadius: 10, marginRight: 10}}>
              
          </TouchableOpacity>
      )
  }