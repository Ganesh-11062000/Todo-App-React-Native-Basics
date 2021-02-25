import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, deleteItem }) {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#888" onPress={() => deleteItem(item.key)} />
                <Text style={styles.itemText}>{item.task}</Text>
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderRadius: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        margin: 20,
    },
    itemText: {
        marginLeft: 20,
    }
});