import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onPress, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color}]} onPress={onPress} >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Button;
