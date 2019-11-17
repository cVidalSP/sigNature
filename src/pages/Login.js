import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AvatarImg from '../../assets/avataaars.png';
import {Button, CheckBox, Input} from 'react-native-elements'
import Service from "../service/BaseAxios";
import {onSignIn} from "../service/Storage";

export default function Login({navigation}) {
    const [user, setUser] = useState('andre@gmail.com');
    const [password, setPassword] = useState('123456');
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function handleSubmit() {
        navigation.navigate('Options');
    }

    function goToRegister() {
        navigation.navigate('Register');
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
                <Text style={styles.mainTitle}>Hi !!</Text>

                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={AvatarImg}/>

                    <View style={{marginTop: 16, width: "100%"}}>
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