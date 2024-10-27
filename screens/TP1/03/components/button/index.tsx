
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface ButtonProps {
    color: string;
    title: string;
    onPress: () => void;
}

export default function ButtonComponent({ color, title, onPress }: ButtonProps) {
    return (
        <View style={[styles.button]}>
            <Button title={title} onPress={onPress} color={color}/>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100
    }
});
