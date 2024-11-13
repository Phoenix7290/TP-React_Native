import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// Tela de Informações Pessoais
function PersonalInfoScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/243x120' }} style={styles.image} />
      <Text style={styles.title}>Nome</Text>
      <Text>Endereço</Text>
      <Text>(##) ## ####-####</Text>
      <Text>email@dom.com</Text>
      <Text>Bio...</Text>
      <View style={styles.socialIcons}>
        <FontAwesome name="youtube" size={24} />
        <FontAwesome name="facebook" size={24} />
        <FontAwesome name="twitter" size={24} />
        <FontAwesome name="instagram" size={24} />
      </View>
    </View>
  );
}

// Tela de Informações Acadêmicas
function AcademicInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>
      <Text>Engenharia de Software - Universidade X</Text>
      <Text>Certificações: Certificação Y</Text>
    </View>
  );
}

// Tela de Experiências Profissionais
function ExperienceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiências</Text>
      <Text>Empresa Z - Desenvolvedor</Text>
      <Text>Responsabilidades: Desenvolvimento de aplicações web e mobile.</Text>
    </View>
  );
}

// Tela de Habilidades e Idiomas
function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades e Idiomas</Text>
      <Text>JavaScript, React, React Native</Text>
      <Text>Inglês: Avançado</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Pessoal" component={PersonalInfoScreen} />
        <Tab.Screen name="Acadêmico" component={AcademicInfoScreen} />
        <Tab.Screen name="Experiências" component={ExperienceScreen} />
        <Tab.Screen name="Habilidades" component={SkillsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 243,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-around',
    width: '50%',
  },
});
