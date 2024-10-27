import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

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
            <TouchableHighlight style={styles.touchable} onPress={() => increment()}>
                <Text style={styles.touchableText}>Incremento</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchable} onPress={() => decrement()}>
                <Text style={styles.touchableText}>Decremento</Text>
            </TouchableHighlight>
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
        marginTop: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    touchableText: {
        fontSize: 18,
    }
});