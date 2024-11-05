import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

interface Movie {
    img: string;
    title: string;
    year: number;
    rating: number;
}

const MultiCard = ({ movie }: { movie: Movie }) => {
    return (

        <View style={styles.container}>
            <Image source={{ uri: movie.img }} style={styles.image} alt={`${movie.title} movie`} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.releaseDate}>{movie.year}</Text>
                <Text style={styles.rating}>Rating: {movie.rating}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    releaseDate: {
        fontSize: 14,
        color: 'gray',
    },
    rating: {
        fontSize: 14,
        color: 'black',
    },
});

export default MultiCard;