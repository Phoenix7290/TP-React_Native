import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Item 1</Text>
      <Text style={styles.box}>Item 2</Text>
      <Text style={styles.box}>Item 3</Text>
      <Text style={styles.box}>Item 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
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
