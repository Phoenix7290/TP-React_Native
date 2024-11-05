import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ImageDisplayProps {
  image: string;
  title: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ImageDisplay;
