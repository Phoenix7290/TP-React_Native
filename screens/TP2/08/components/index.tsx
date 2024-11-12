
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ComponentProps {
    avatar: string;
    name: string;
    adress: string;
    number: string;
}

const Component: React.FC<ComponentProps> = ({ avatar, name, adress, number }) => {
    return (
        <View style={estilos.contatoContainer}>
            <Image source={{ uri: avatar }} style={estilos.avatar} />
            <View style={estilos.infoContainer}>
                <Text style={estilos.name}>{name}</Text>
                <Text style={estilos.adress}>{adress}</Text>
                <Text style={estilos.number}>{number}</Text>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    contatoContainer: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    adress: {
        fontSize: 14,
        color: '#666',
    },
    number: {
        fontSize: 14,
        color: '#666',
    },
});

export default Component;
