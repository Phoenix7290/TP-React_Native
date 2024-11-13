import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Post } from '../index.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const posts: Post[] = [
  { id: 1, title: 'Postagem 1', summary: 'Resumo da postagem 1', likes: 10, shares: 5, content: 'Conteúdo completo da postagem 1', author: 'Autor 1', date: '12/11/2024' },
  { id: 2, title: 'Postagem 2', summary: 'Resumo da postagem 2', likes: 20, shares: 8, content: 'Conteúdo completo da postagem 2', author: 'Autor 2', date: '11/11/2024' },
  { id: 3, title: 'Postagem 3', summary: 'Resumo da postagem 3', likes: 15, shares: 6, content: 'Conteúdo completo da postagem 3', author: 'Autor 3', date: '10/11/2024' },
];

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postContainer}
            onPress={() => navigation.navigate('Details', { post: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.summary}>{item.summary}</Text>
            <View style={styles.footer}>
              <Text style={styles.likes}>Curtidas: {item.likes}</Text>
              <Text style={styles.shares}>Compart.: {item.shares}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    marginVertical: 5,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likes: {
    fontSize: 12,
    color: 'blue',
  },
  shares: {
    fontSize: 12,
    color: 'blue',
  },
});
