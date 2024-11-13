import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AcademicInfoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações Acadêmicas</Text>
      <Text>Graduação: Engenharia de Software</Text>
      <Text>Instituição: Universidade Exemplo</Text>
      <Text>Conclusão: 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});

export default AcademicInfoScreen;
