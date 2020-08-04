import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ActivityIndicator} from 'react-native';

  export default class IntroudctionLanding extends Component {
  render() {
    return(
      <View style={styles.header}>
        <View style={{top: 225, left: 10}}>
          <Image 
            source={require('./images/warehouse-header.jpg')}
            style={{width: 99, height: 75, right: 10}}
            />
            <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', top: 10}}>WAREHOUSE</Text>
          </View>
            <ActivityIndicator
              size='50%' 
              style={{top: 325}}
            />
      </View>

    );
  }
}


export const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingTop: 25
  },
  container: {
    paddingTop: 160,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 2,
    fontFamily: 'normal'
  },
  specialText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 2,
    fontFamily: 'normal'
    
  }
})