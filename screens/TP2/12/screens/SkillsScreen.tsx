import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SkillsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      <Text>- JavaScript</Text>
      <Text>- TypeScript</Text>
      <Text>- React & React Native</Text>
      <Text>- Git e controle de versão</Text>
      <Text>- Comunicação e colaboração em equipe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});

export default SkillsScreen;
