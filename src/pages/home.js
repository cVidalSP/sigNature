import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerImg}>
                    <Text>IMG</Text>
                </View>
                <Text style={styles.arrowHeader}>SETA</Text>
            </View>
            <View>
                <Text style={styles.text}>Main title</Text>
                <Text style={styles.text}>Subtitle</Text>
            </View>
            <View style={styles.rodapeContainer}>
                <Text style={styles.rodapeText}>Texto do rodapé</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#01755d'
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