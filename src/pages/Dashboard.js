import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, ToastAndroid, View} from 'react-native';

import {Avatar, Header, Text} from 'react-native-elements';
import Card from "../components/Card";

import Service from '../service/BaseAxios';

export default function Dashboard({navigation}) {
    const [petitions, setPetitions] = useState([]);

    useEffect(() => getPetitions());

    function getPetitions() {
        Service.get('/petitions').then(result => {
            const data = result.data;
            setPetitions(data);
        });
    }

    const name = 'André Kitano';
    return (
        <SafeAreaView style={styles.container}>
            <Header
                containerStyle={{padding: 0}}
                backgroundColor={'#fff'}
                placement={"left"}
                statusBarProps={{barStyle: 'dark-content'}}
                leftContainerStyle={{marginStart: 16}}
                leftComponent={<Avatar source={require('../../assets/avataaars.png')} size="small" rounded title="MT"
                                       onPress={() => ToastAndroid.show(name, ToastAndroid.SHORT)}
                                       activeOpacity={0.7}/>}
                centerComponent={{text: "Olá " + name, style: {color: '#01755D', fontWeight: 'bold', fontSize: 16}}}/>
            <View style={{backgroundColor: '#fff', padding: 0, marginTop: -10, width: '100%'}}>
                <Text h4 style={{color: '#01755D', fontWeight: 'bold', fontSize: 12, marginStart: 22}}> Petições do
                    dia</Text>
            </View>
            <ScrollView>
                {petitions.map((value, index) => {
                    return <Card callback={() => alert("oi")} name={value.name} url={value.image} desc={value.desc}/>
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f4f6',
    },
});