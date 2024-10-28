import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from './components/Button';
import ImageDisplay from './components/Image';

const images = [
  { uri: 'https://via.placeholder.com/150/FF0000', title: 'Imagem Vermelha' },
  { uri: 'https://via.placeholder.com/150/00FF00', title: 'Imagem Verde' },
  { uri: 'https://via.placeholder.com/150/0000FF', title: 'Imagem Azul' },
];

const App = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  // Existe um lag de 1.5s que não é perceptível no emulador, mas é perceptível em um dispositivo físico
  return (
    <View style={styles.container}>
      <ImageDisplay image={currentImage.uri} title={currentImage.title} />
      <Button label="Trocar Imagem" onPress={handleRandomImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
