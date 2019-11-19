import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, Modal, StyleSheet, ToastAndroid, View} from 'react-native';
import {Button, CheckBox, Header, Icon, Input, Text} from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import {SwitchActions} from 'react-navigation';
import ActionButton from 'react-native-action-button';

import Service from "../service/BaseAxios";
import {onSignIn} from "../service/Storage";
import Male from "../../assets/male.png";
import Female from "../../assets/female.png";

export default function Register({navigation}) {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [datepicker, setDatePicker] = useState(new Date());
    const [avatar, setAvatar] = useState(Male);
    const [genr, setGenr] = useState("Masculino");
    const [checkedMale, setCheckedMale] = useState(true);
    const [checkedFemale, setCheckedFemale] = useState(false);
    const [show, setShowPicker] = useState(false);
    const [modalVisible, setShowModal] = useState(false);

    function handleCheck(genre) {
        if (genre === "masculino") {
            setCheckedMale(true);
            setCheckedFemale(false);
            setGenr(genre);
            setAvatar(Male);
        }

        if (genre === "feminino") {
            setCheckedMale(false);
            setCheckedFemale(true);
            setGenr(genre);
            setAvatar(Female);
        }
    }

    function setDate(date) {
        setDatePicker(date);
        hidePicker();
        setShowModal(true);
    }

    function hidePicker() {
        setShowPicker(false);
    }

    function showPicker() {
        if (user !== '' && email !== '' && password !== '') {
            setShowPicker(true);
        } else {
            ToastAndroid.show("Ops!! Por favor preencha os campos", ToastAndroid.SHORT)
        }
    }

    function handleSubmit() {
        navigation.navigate('Options');
    }

    function goBack() {
        navigation.dispatch(SwitchActions.jumpTo({routeName: 'Login'}));
    }

    function login() {
        Service.post('/users', {
            name: user,
            email: email,
            password: password,
            genre: genr,
            birth: datepicker
        }).then(result => {
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
        });
    }

    return (
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container}>

                <Header leftComponent={{icon: 'arrow-left', type: 'feather', color: '#fff', onPress: () => goBack()}}
                        backgroundColor={'#01755D'}
                        leftContainerStyle={{marginStart: 16}}
                />
                <View style={{backgroundColor: '#01755D', padding: 0, marginTop: -10, width: '100%'}}>
                    <Text h4 style={{color: '#fff', fontWeight: 'bold', fontSize: 12, marginTop: 16, marginStart: 22}}>Qual
                        seu nome?</Text>
                    <Input
                        label='Seu nome'
                        containerStyle={{marginStart: 16, marginTop: 16, width: '95%'}}
                        labelStyle={{color: '#fff', fontWeight: 'bold', fontSize: 18}}
                        inputStyle={{color: '#fff'}}
                        value={user}
                        onChangeText={value => setUser(value)}
                        underlineColorAndroid='transparent'
                    />
                    <Input
                        label='Seu email'
                        containerStyle={{marginStart: 16, marginTop: 16, width: '95%'}}
                        labelStyle={{color: '#fff', fontWeight: 'bold', fontSize: 18}}
                        inputStyle={{color: '#fff'}}
                        value={email}
                        onChangeText={value => setEmail(value)}
                        underlineColorAndroid='transparent'
                    />
                    <Input
                        leftIconContainerStyle={{marginEnd: 16}}
                        label='Uma senha criativa :D'
                        errorStyle={{color: '#fff'}}
                        labelStyle={{color: '#fff', fontWeight: 'bold', fontSize: 18}}
                        labelProps={{color: '#fff'}}
                        inputStyle={{color: '#fff'}}
                        containerStyle={{marginStart: 16, marginTop: 16, width: '95%'}}
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry={true}/>
                </View>

                <DateTimePicker
                    isVisible={show}
                    onConfirm={setDate}
                    onCancel={hidePicker}
                    confirmTextStyle={{color: 'black'}}
                    cancelTextStyle={{color: 'black'}}
                />

                <ActionButton
                    buttonColor="#fff"
                    renderIcon={(value) => {
                        return <Icon
                            name='arrow-right'
                            type='feather'
                            color='black'
                        />
                    }}
                    onPress={showPicker}>
                </ActionButton>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setShowModal(false);
                    }}>
                    <View style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{backgroundColor: "#f2f4f6", width: '80%', height: '54%'}}>
                            <View>
                                <Text h4 style={{
                                    color: '#01755D',
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                    marginTop: 16,
                                    marginStart: 8
                                }}>Escolha um Avatar:</Text>

                                <View style={styles.avatarContainer}>
                                    <Image style={styles.avatar} source={avatar}/>
                                    <View style={styles.avatarTextContainer}>
                                        <CheckBox
                                            containerStyle={'transparent'}
                                            title='Masculino'
                                            checked={checkedMale}
                                            onPress={() => handleCheck("masculino")}
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'/>
                                        <CheckBox
                                            containerStyle={'transparent'}
                                            title='Feminino'
                                            checked={checkedFemale}
                                            onPress={() => handleCheck("feminino")}
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'/>
                                    </View>
                                </View>

                                <Button
                                    containerStyle={styles.loginButtonContainer}
                                    buttonStyle={styles.loginButtonStyles}
                                    titleStyle={styles.loginButtonTitleStyles}
                                    title="TUDO PRONTO!!"
                                    onPress={() => login()}
                                />

                                <Button
                                    containerStyle={styles.loginButtonContainer}
                                    buttonStyle={styles.loginButtonStyles}
                                    titleStyle={styles.loginButtonTitleStyles}
                                    title="Cancelar"
                                    onPress={() => setShowModal(!modalVisible)}
                                />

                            </View>
                        </View>
                    </View>
                </Modal>
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
        marginTop: 18,
        marginBottom: 18,
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
        backgroundColor: '#fff',
        width: '100%',
        marginTop: 16
    },
    loginButtonStyles: {
        backgroundColor: '#fff',
    },
    loginButtonTitleStyles: {
        color: 'black'
    }
});