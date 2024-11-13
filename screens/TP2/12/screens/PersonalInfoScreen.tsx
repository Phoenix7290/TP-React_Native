import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PersonalInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações Pessoais</Text>
      <Text>Nome: Marcos Ryan Silva Santos</Text>
      <Text>Idade: 25 anos</Text>
      <Text>Email: example@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
