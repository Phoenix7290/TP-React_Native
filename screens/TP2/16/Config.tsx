import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const config = [
  { id: '1', title: 'Conta', icon: 'person' },
  { id: '2', title: 'Notificações', icon: 'notifications' },
  { id: '3', title: 'Privacidade', icon: 'lock' },
  { id: '4', title: 'Tema', icon: 'color-lens' },
  { id: '5', title: 'Sobre', icon: 'info' },
];

export default function Config() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <FlatList
        data={config}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.configItem}>
            <Icon name={item.icon} size={24} color="#555" style={styles.icon} />
            <Text style={styles.configText}>{item.title}</Text>
            <Icon name="chevron-right" size={24} color="#555" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 20,
    color: '#333',
    textAlign: 'center',
  },
  configItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  configText: {
    fontSize: 18,
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    marginRight: 15,
  },
});
