import {AsyncStorage} from 'react-native';

export const TOKEN_KEY = "@Signature:token";

export const onSignIn = (value) => AsyncStorage.setItem(TOKEN_KEY, value);

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    return (token !== null) ? token : false;
};