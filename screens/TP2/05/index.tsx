import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Item 1</Text>
      <Text style={styles.box}>Item 2</Text>
      <Text style={styles.box}>Item 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  box: {
    padding: 20,
    backgroundColor: 'skyblue',
    margin: 5,
    borderRadius: 5,
  },
});

export default App;
