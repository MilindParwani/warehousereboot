import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView} from 'react-native';
import { CreatePostDetails } from './CreatePostDetails';
import { Header } from './Header';

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
})

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Image 
            source={require('./images/background_tesrt.jpg')}
            style={{width: '100%', height: '100%'}}
          />
          <View style={{zIndex: 1, flex: 1, bottom: 350}}>
            <Text style={styles.text}>WELCOME TO WAREHOUSE</Text>
          </View>
        </View>
        <View style={styles.slide2}>
          <Image 
              source={require('./images/background_tesrt.jpg')}
              style={{width: '100%', height: '100%'}}
           />
        </View>
      </Swiper>
    )
  }
}