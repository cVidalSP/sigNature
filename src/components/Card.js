import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Card} from 'react-native-elements';
import { readDirectoryAsync } from 'expo-file-system';

const deviceWidth = Dimensions.get('window').width;

const CustomCard = (props) => {

    return (
        <TouchableOpacity onPress={props.callback}>
            <Card containerStyle={styles.container} title={props.name} image={{uri: props.url}}>
                <Text style={{marginBottom: 10}}>
                    {props.desc}
                </Text>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        width: deviceWidth - 35,
    },
});

export default CustomCard;