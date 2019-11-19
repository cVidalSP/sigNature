import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, CheckBox, Header, Input, Text} from 'react-native-elements'
import Service from "../service/BaseAxios";
import {onSignIn} from "../service/Storage";

export default function Login({navigation}) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function handleSubmit() {
        navigation.navigate('Options');
    }

    function goToRegister() {
        navigation.navigate({routeName: 'Register', key: 'login'});
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

    const comment =
        <View style={styles.avatarTextContainer}>
            <CheckBox containerStyle={{backgroundColor: "#01755D"}} center title='Masculino'
                      checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={false}/>
            <CheckBox containerStyle={{backgroundColor: "#01755D"}} center title='Feminino'
                      checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={true}/>
        </View>;

    return (
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container}>
                <Header backgroundColor={'#01755D'} centerComponent={{
                    text: 'Hii! seja bem-vindo :)',
                    style: {color: '#fff', fontWeight: 'bold', fontSize: 22}
                }}/>

                <View style={{backgroundColor: '#01755D', padding: 0, marginTop: -10, width: '100%'}}>
                    <Text h4 style={{color: '#fff', fontWeight: 'bold', fontSize: 12, marginTop: 16, marginStart: 22}}>Log
                        In</Text>
                    <Input
                        leftIcon={{type: 'feather', name: 'user', color: "#fff"}}
                        leftIconContainerStyle={{marginEnd: 16}}
                        placeholder='Login'
                        errorStyle={{color: '#fff'}}
                        labelProps={{color: '#fff'}}
                        inputStyle={{color: '#fff'}}
                        containerStyle={{marginTop: 16}}
                        errorMessage={error}
                        value={user}
                        onChangeText={value => setUser(value)}/>
                    <Input
                        leftIcon={{type: 'feather', name: 'lock', color: "#fff"}}
                        leftIconContainerStyle={{marginEnd: 16}}
                        placeholder='Password'
                        errorStyle={{color: '#fff'}}
                        labelProps={{color: '#fff'}}
                        inputStyle={{color: '#fff'}}
                        containerStyle={{marginTop: 16}}
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry={true}/>
                    <TouchableOpacity onPress={() => goToRegister()}>
                        <Text style={{color: '#fff', marginStart: 16}}>Nao tem uma conta ainda? Borá fazer
                            uma!</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputsContainer}>
                    <Button
                        containerStyle={styles.loginButtonContainer}
                        buttonStyle={styles.loginButtonStyles}
                        titleStyle={styles.loginButtonTitleStyles}
                        loadingProps={{color: 'black'}}
                        title="Entrar"
                        onPress={() => login()}
                        loading={Loading}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#01755D',
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
        position: 'absolute',
        bottom: 0,
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