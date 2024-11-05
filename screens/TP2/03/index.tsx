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

export default App;
