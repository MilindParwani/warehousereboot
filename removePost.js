import React,{Component} from 'react';
import { View,Text,StyleSheet,Button,Image, ListView,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { Comment } from './Comment';


export function RemovePost() {
        return(
            <TouchableOpacity style={styles.remove} activeOpacity={0.5}>
                <Text style={{color: 'white', fontSize: 15, bottom: 7, left: 3, fontWeight: 'bold'}}>-</Text>
            </TouchableOpacity>
        )
    }


const styles=StyleSheet.create({
    header: {
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#282828',
        width: 412,
        height: 1000
    },
    container: {
        top: 50,
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
    post: {
        backgroundColor: '#282828',
        height: 500,
        width: '90%',
        bottom: 140,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 30

    },
    postOverlay: {
        backgroundColor: '#282828',
        width: '100%',
        height: 35,
        top: 260,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
        zIndex: 1
    },
    remove: {
        width: 12,
        height: 12,
        borderRadius: 10,
        zIndex: 1,
        bottom: 5,
        backgroundColor: 'red'
    }

})