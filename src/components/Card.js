import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Card} from 'react-native-elements';

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
        borderRadius: 16
    },
});

export default CustomCard;