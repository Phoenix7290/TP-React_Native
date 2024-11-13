// screens/DetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ route }: Props) {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.footer}>
        <Text style={styles.likes}>Curtidas: {post.likes}</Text>
        <Text style={styles.shares}>Compart.: {post.shares}</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.content}>{post.content}</Text>
      </ScrollView>
      <Text style={styles.author}>Autor: {post.author}</Text>
      <Text style={styles.date}>Postado em: {post.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  likes: {
    fontSize: 14,
    color: 'blue',
  },
  shares: {
    fontSize: 14,
    color: 'blue',
  },
  contentContainer: {
    flex: 1,
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
  },
  author: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  date: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});
