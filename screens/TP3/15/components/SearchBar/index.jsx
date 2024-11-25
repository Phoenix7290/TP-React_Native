import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ value, onChangeText, onSubmit }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search for books..."
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default SearchBar;
