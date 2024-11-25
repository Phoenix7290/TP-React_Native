import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Filter({ onFilter }) {
  const [text, setText] = useState('');

  return (
    <View style={styles.filterContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={text}
        onChangeText={setText}
      />
      <Button title="Filter" onPress={() => onFilter(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 5,
  },
});
