import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import { Header } from './Header';
import { ProfilePost } from './ProfilePost';

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    height: 375,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    top: 227.5
  },
  slide2: {
    height: 375,
    top: 227.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default class WishlistSwiper extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <View style={{flexDirection: 'column', bottom: 30}}>
              <View style={{left: 15, width: '100%', flexDirection: 'row', backgroundColor: '#282828', borderRadius: 40}}>
                <TouchableOpacity style={{width: '46%', height:40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212', borderRadius: 40}} activeOpacity={0.5}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, letterSpacing: 2}}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '46%', height: 40, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, letterSpacing: 2}}>WISHLIST</Text>
                </TouchableOpacity>
              </View>
              <View style={{bottom: 95}}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',left: 142.5, top: 110}}>
                        <ProfilePost />
                        <ProfilePost />
                        <ProfilePost />
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',left: 142.5, top: 110}}>
                        <ProfilePost />
                        <ProfilePost />
                        <ProfilePost />
                </View>
              </View>
          </View>
        </View>
        <View style={styles.slide2}>
        <View style={{flexDirection: 'column', bottom: 27.5}}>
              <View style={{left: 15, width: '100%', flexDirection: 'row', bottom: 2.5, backgroundColor: '#282828', borderRadius: 40}}>
                <TouchableOpacity style={{width: '46%', height: 40, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, letterSpacing: 2}}>MY POSTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '46%', height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 40, backgroundColor: '#121212', height: 40}} activeOpacity={0.5}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, letterSpacing: 2}}>WISHLIST</Text>
                </TouchableOpacity>
              </View>
              <View style={{bottom:97.5}}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',left: 142.5, top: 110}}>
                        <ProfilePost />
                        <ProfilePost />
                        <ProfilePost />
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',left: 142.5, top: 110}}>
                        <ProfilePost />
                        <ProfilePost />
                        <ProfilePost />
                </View>
              </View>
          </View>
        </View>
      </Swiper>
    )
  }
}