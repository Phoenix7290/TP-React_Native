import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const App = () => {
  return (
    <View style={styles.container}>
        <View>
            <FastImage
                source={{
                    uri: 'https://via.placeholder.com/150',
                    priority: FastImage.priority.high,
                }}
                style={{ width: 150, height: 150 }}
            />
            <Text>Nome</Text>
            <Text>Descrição</Text>
            <Text>Data</Text>
        </View>
      <Text style={styles.box}>Item 1</Text>
      <Text style={styles.box}>Item 2</Text>
      <Text style={styles.box}>Item 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: '100%',
  },
  box: {
    padding: 20,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'skyblue',
    margin: 5,
    borderRadius: 5,
  },
});

export default App;
