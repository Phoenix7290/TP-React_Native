import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
    const [counter, setCounter] = useState<number>(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contador: {counter}</Text>
            <Pressable style={styles.touchable} onPress={() => increment()}>
                <Text style={styles.touchableText}>Incremento</Text>
            </Pressable>
            <Pressable style={styles.touchable} onPress={() => decrement()}>
                <Text style={styles.touchableText}>Decremento</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    touchableText: {
        fontSize: 18,
    }
});