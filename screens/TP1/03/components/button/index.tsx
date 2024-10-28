import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface ButtonProps {
    color: string;
    title: string;
    onPress: () => void;
}

export default function ButtonComponent({ color, title, onPress }: ButtonProps) {
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.button, 
                { backgroundColor: pressed ? 'rgba(0,0,0,0.1)' : color }
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    }
});
