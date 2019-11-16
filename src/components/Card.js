import React from 'react';
import {StyleSheet, Text} from 'react-native'
import {Card} from 'react-native-elements'

const CustomCard = (props) => {
    return (
        <Card containerStyle={styles.container} title={props.name} image={{uri: props.url}}>
            <Text style={{marginBottom: 10}}>
                {props.desc}
            </Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10
    },
});

export default CustomCard;