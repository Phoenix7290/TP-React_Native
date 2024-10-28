import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function getAge(day: number, mes: number, ano: number) : {ageYear: number, ageMonth: number} {
    const currentDate = new Date();
    let birthDate = new Date(ano, mes - 1, day);

    let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonth = currentDate.getMonth() - birthDate.getMonth();

    if (currentDate.getDate() < day) {
        ageMonth--;
    }

    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }

    const age = { ageYear: ageYear, ageMonth: ageMonth };
    return age;
}

export default function App() {
    const [date, setDate] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const printAge = () => {
        const [day, month, year] = date.split('/').map(Number);
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            setResult('Data inválida');
            return;
        }
        let age = getAge(day, month, year);
        setResult(`Idade: ${age.ageYear} anos e ${age.ageMonth} meses`);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="day/Mês/Ano"
                value={date}
                onChangeText={setDate}
            />
            <Button title="Idade" onPress={printAge} />
            {result ? <Text style={styles.result}>{result}</Text> : null}
        </View>
    )
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