import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar } from 'react-native';

export default function Home({ navigation }){

    function handleSubmit(){
        navigation.navigate('Login');
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerImg}>
                    <Text>IMG</Text>
                </View>
                <TouchableOpacity onPress={handleSubmit}>
                    <Ionicons name='md-arrow-forward' size={58} color='#FFF'/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.text}>Main title</Text>
                <Text style={styles.text}>Subtitle</Text>
            </View>
            <View style={styles.rodapeContainer}>
                <Text style={styles.rodapeText}>Texto do rodapé</Text>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#01755d',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        width: '100%',
        height: 280,
    },
    headerImg:{
        backgroundColor:'#fff',
        width: 160,
        height: 240,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    arrowHeader:{
        paddingTop: 50,
        paddingRight: 40
    },  
    text: {
        color:'#fff',
        fontSize: 16,
    },
    rodapeContainer:{
        backgroundColor: '#c5fcf0',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
    },
    rodapeText:{
        fontSize: 22,
    }
  });