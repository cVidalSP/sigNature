import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {StyleSheet, SafeAreaView, Platform, StatusBar, Text, Image, TouchableOpacity, Dimensions, ScrollView, View} from 'react-native'

import Service from "../service/BaseAxios";

import Image1 from '../../assets/dedo1.jpg';
import Image2 from '../../assets/dedo2.jpg';
import Image3 from '../../assets/dedo3.jpg';

const deviceWidth = Dimensions.get('window').width;

export default Verify = ({ navigation }) => {

    function handleSubmitImage(img){
        apiCall(img);
    }

    function handleSubmitBack(){
        navigation.navigate('Options');
    }

    function apiCall(string){
        Service.post('/users/authBiometry', {dedo : string}).then(result =>{

            if(result.data.validade === 'success'){
                alert('Assinada com sucesso!');
                navigation.navigate('Options');
            }else{
                alert('Falha ao bater digitais. Por favor tente novamente')
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleSubmitBack}>
                    <Ionicons name='md-arrow-round-back' size={38} color='#FFF'/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Selecione sua digital: </Text>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={() => handleSubmitImage('dedo1.jpg')}>
                    <Image style={styles.fingerImage} source={Image1}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSubmitImage('dedo2.jpg')}>
                    <Image style={styles.fingerImage} source={Image2}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSubmitImage('dedo3.jpg')}>
                    <Image style={styles.fingerImage} source={Image3}/>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: '100%',
        borderRadius: 16,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#01755d',
        height: '10%',
        alignItems: 'center',
    },
    headerText:{
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#FFF'
    }, 
    fingerImage:{
        width: '50%',
        marginLeft: 40,
        marginBottom: 20, 
    }
});
