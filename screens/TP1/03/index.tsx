import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './components/Button';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handlePress = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você pressionou: {selectedColor}</Text>
      <View style={styles.buttonContainer}>
        <Button label="Vermelho" onPress={() => handlePress('Vermelho')} color='#FF0000' />
        <Button label="Verde" onPress={() => handlePress('Verde')} color='#00ff00'/>
        <Button label="Azul" onPress={() => handlePress('Azul')} color='#0080ff'/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default App;
