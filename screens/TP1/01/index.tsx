import React from "react";
import { View, Text } from 'react-native';

export default function App(seuNomeCompleto: string, horaAtual: string) {
    seuNomeCompleto  = "Fulano de Tal";
    horaAtual = new Date().toLocaleTimeString();

    return (
        <View>
            <Text>Olá {seuNomeCompleto}! Agora são {horaAtual}</Text>
        </View>
    )
}