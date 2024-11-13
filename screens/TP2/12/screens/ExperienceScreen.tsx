import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExperienceScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text>Empresa: Exemplo Tech</Text>
      <Text>Cargo: Desenvolvedor Front-End</Text>
      <Text>Período: 2022 - Presente</Text>
      <Text>Descrição: Desenvolvendo interfaces responsivas e integrações com APIs REST.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});

export default ExperienceScreen;
