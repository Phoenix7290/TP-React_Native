import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
    const [number, setNumber] = useState<string>('');
    const [result, setResult] = useState<string>('');

    function isPrime(num: number): boolean {
        if (num <= 1) return false;
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) return false; 
        }
        return true; 
    }

    const validatePrime = () => {
        const num = parseInt(number);
        if (isNaN(num)) {
            setResult('Por favor, coloque um número válido.');
        } else {
            setResult(isPrime(num) ? 'Primo' : 'Não primo');
        }
    }

    return (
        <View style={styles.container}>
            <Text>Enter a number:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={number}
                onChangeText={setNumber}
            />
            <Button title="Valide" onPress={validatePrime} />
            {result !== '' && <Text>{result}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        width: '80%',
    },
});