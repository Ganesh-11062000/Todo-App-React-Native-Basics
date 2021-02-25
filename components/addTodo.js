import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState("");

    return (
        <View style={styles.formcontainer}>
            <TextInput
                placeholder="Add Todo..."
                onChangeText={(val) => setText(val)}
                style={styles.textInput}
            />
            <Button onPress={() => submitHandler(text)} title="Add Todo" color="coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    formcontainer: {
        padding: 20,
    },
    textInput: {
        padding: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    }
})