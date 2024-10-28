import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const isPalindrome = (str: string) => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

export default function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const checkPalindrome = () => {
        if (isPalindrome(input)) {
            setResult('É um palíndromo');
        } else {
            setResult('Não é um palíndromo');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite um texto"
                value={input}
                onChangeText={setInput}
            />
            <Button title="Verificar" onPress={checkPalindrome} />
            {result ? <Text style={styles.result}>{result}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
