import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ComponentProps {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

const Component: React.FC<ComponentProps> = ({ text1, text2, text3, text4 }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.box}>{text1}</Text>
            <Text style={styles.box}>{text2}</Text>
            <Text style={styles.box}>{text3}</Text>
            <Text style={styles.box}>{text4}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    box: {
        width: '40%',
        padding: 20,
        marginBottom: 10,
        backgroundColor: 'skyblue',
        margin: 5,
        borderRadius: 5,
        textAlign: 'center',
    },
});

export default Component;
