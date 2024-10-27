import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import ButtonComponent from "./components/button";

export default function App() {
    const [selectedColor, setSelectedColor] = useState<string>('');

    return (
        <View>
            <View style={styles.container}>
                <Text style={selectedColor === 'Vermelho' ? styles.red : selectedColor === 'Verde' ? styles.green : selectedColor === 'Azul' ? styles.blue : null}>
                    Cor Selecionada: {selectedColor}
                </Text>
                <View>
                    <Text>Mude as cores:</Text>
                    <View>
                        <ButtonComponent title="Vermelho" color="red" onPress={() => setSelectedColor('Vermelho')} />
                        <ButtonComponent title="Verde" color="green" onPress={() => setSelectedColor('Verde')} />
                        <ButtonComponent title="Azul" color="blue" onPress={() => setSelectedColor('Azul')} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
    },
    red: {
        color: 'red',
    },
    green: {
        color: 'green',
    },
    blue: {
        color: 'blue',
    }
});