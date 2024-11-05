import React from "react";
import { View, Text } from 'react-native';

interface AppProps {
    seuNomeCompleto?: string;
    horaAtual?: string;
}

const App: React.FC<AppProps> = ({ seuNomeCompleto = "Fulano de Tal", horaAtual = new Date().toLocaleTimeString() }) => {
    return (
        <View>
            <Text>Olá {seuNomeCompleto}! Agora são {horaAtual}</Text>
        </View>
    );
};

export default App;