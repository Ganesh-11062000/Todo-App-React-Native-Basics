import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        marginTop: 20,
        padding: 10,
        backgroundColor: 'coral'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    }
})