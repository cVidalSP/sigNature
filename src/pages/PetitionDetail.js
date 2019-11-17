import React, { useEffect, useState } from 'react';
import {Ionicons} from '@expo/vector-icons';
import {Image, View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, ScrollView} from 'react-native';


export default function PetitionDetail({ navigation }){
    const obj = navigation.getParam('obj');
    console.log(obj.image)
    function handleSubmit(){
        alert('Inserir imagem');
    }

    function previousNav(){
        navigation.navigate('Options');
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerButtonContainer}>
                <TouchableOpacity onPress={previousNav}>
                    <Ionicons name='md-arrow-round-back' size={38} color='#FFF'/>
                </TouchableOpacity>
            </View>
            <Image style={styles.petitionImage} source={{ uri: obj.image }}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{obj.name}</Text>
                </View>
                <View style={styles.mainContentContainer}>
                    <ScrollView>
                        <Text style={styles.mainContent}>{`   ${obj.desc}`}</Text>
                    </ScrollView>
                </View>
                <View style={styles.rodapeButtonContainer}>
                    <View style={styles.rodapeButton}>
                        <TouchableOpacity onPress={handleSubmit}>
                            <Ionicons name='md-finger-print' size={48} color='#FFF'/>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        height:'100%',
        width: '100%',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0, //PARA NAO FICAR DENTRO 
                                                                                //DO MENU DE CIMA DO ANDROID\
        backgroundColor: '#C5FCF0',
    },
    petitionImage:{ 
        width: "100%",
        height: "35%",
        resizeMode: 'cover'
    },
    titleContainer:{
        marginTop: -25,
        width: '100%',
        alignItems: 'flex-end',
    },
    title:{
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 32,
        height:50,
        color: '#FFF',
        letterSpacing: 2,
        backgroundColor: '#01755d',
    },
    mainContentContainer:{
        marginTop: "10%",
        height: "38%",
        width: "90%",
    },
    mainContent:{
        fontSize: 20,
        letterSpacing: 2,
        lineHeight: 28,
        textAlign: 'justify',
        color: '#595959',
    },
    headerButtonContainer:{
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+20: 20,
        justifyContent: 'flex-start'
    },
    rodapeButtonContainer:{
        width: '100%',
        flexDirection: 'row',
        paddingRight: 20,
        justifyContent: 'flex-end'
    },
    rodapeButton:{
        marginTop: 20,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#01755d',
    }
})