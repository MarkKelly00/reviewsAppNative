import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function About() {
    return(
        <View style={styles.container}>
            <Text style={styles.textBold}>About</Text>
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