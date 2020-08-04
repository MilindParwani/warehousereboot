import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, Linking} from 'react-native';

  export default class App extends Component {
  render() {
    return(
      <View style={styles.header}>
        <Text style={styles.specialText}>WAREHOUSE</Text>
        <View style={styles.container}>
          <Text style={styles.specialText}>LOG IN USING</Text>
          <View>
            <TouchableOpacity style={{top: 27}} activeOpacity={0.5}>
              <Image 
                style={{width:99, height:75}}
                source={require('./images/warehouse-header.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View style={{top: 55}}><Text style={styles.text}>OR</Text></View>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={{bottom:10, right:40}} activeOpacity={0.5}>
            <Image 
              source={require('./images/facebook.jpg')}
              style={{width:40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{bottom:10, right:20}} activeOpacity={0.5}>
            <Image 
              source={require('./images/snapchat-vector.jpg')}
              style={{width:45, height: 45}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{bottom: 10, right: 3}} activeOpacity={0.5}>
            <Image 
              source={require('./images/instagram-vector.jpg')}
              style={{width:40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{bottom: 10, left: 15}} activeOpacity={0.5}>
            <Image 
              source={require('./images/google.jpg')}
              style={{width:40, height: 40}}
            />
          </TouchableOpacity>

          
          
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>NOT A MEMBER?</Text>
          <TouchableOpacity style={{top: 25}} activeOpacity={0.5}>
            <Text style={styles.specialText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
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
    
  },
  imageContainer: {
    top:90,
    paddingLeft: 20,
    alignItems:'center',
    flexDirection: 'row'
  },
  footer: {
    top: 190,
    alignItems: 'center'
  }
})