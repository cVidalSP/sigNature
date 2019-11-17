import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import Service from "../service/BaseAxios";
import {onSignIn} from "../service/Storage";

export default function Register({navigation}) {
    const [user, setUser] = useState('andre@gmail.com');
    const [password, setPassword] = useState('123456');
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        //BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    });

    function handleSubmit() {
        navigation.navigate('Options');
    }

    function login() {
        setLoading(true);
        Service.post('/users/login', {email: user, password}).then(result => {
            return {
                data: result.data,
                token: result.headers['x-auth-token'],
            };
        }).then(values => {
            onSignIn(values.token);
            Service.setHeader(values.token);
            handleSubmit();
        }).catch(err => {
            console.log(err);
            setError('Ops!! algo deu errado');
        }).finally(() => setLoading(false));
    }

    return (
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container}>
                <Text style={styles.mainTitle}>Hi !!</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#01755D',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
    },
    mainTitle: {
        fontSize: 34,
        color: '#FFF',
        letterSpacing: 2
    },
    avatarContainer: {
        width: '100%',
        marginBottom: 26,
        alignItems: 'center',
    },
    avatarInfo: {
        color: '#FFF',
        letterSpacing: 2,
        fontSize: 18,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    avatarTextContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputsContainer: {
        width: '100%',
    },
    loginButtonContainer: {
        backgroundColor: '#c5fcf0',
        width: '100%',
        height: 60,
        marginBottom: -20,
    },
    loginButtonStyles: {
        backgroundColor: '#fff',
    },
    loginButtonTitleStyles: {
        color: 'black'
    }
});