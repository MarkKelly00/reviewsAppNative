import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ReviewDetails() {
    return(
        <View style={styles.container}>
            <Text style={styles.textBold}>ReviewDetails</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    textBold: {
        fontFamily: 'Inconsolata-SemiBold',
    }
})