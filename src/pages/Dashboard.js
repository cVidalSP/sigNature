import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {petitions.map((value, index) => {
                    return <Card name={value.name} url={value.image} desc={value.desc}/>
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
        backgroundColor: '#ecfcff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});