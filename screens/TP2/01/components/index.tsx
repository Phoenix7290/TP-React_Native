import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ComponentProps {
    text1: string;
    text2: string;
    text3: string;
}

const Component: React.FC<ComponentProps> = ({ text1, text2, text3 }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.box}>{text1}</Text>
            <Text style={styles.box}>{text2}</Text>
            <Text style={styles.box}>{text3}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    box: {
        padding: 20,
        backgroundColor: 'skyblue',
        margin: 5,
        borderRadius: 5,
    },
});

export default Component;
