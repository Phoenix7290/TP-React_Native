import  { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const viagensContatos = [
  { id: '1', destination: 'Paris', beggining: '2024-01-15', end: '2024-01-20', rating: 5 },
  { id: '2', destination: 'Tokyo', beggining: '2024-03-10', end: '2024-03-15', rating: 4 },
];

import { NavigationProp } from '@react-navigation/native';

export default function FeedContatos({ navigation }: { navigation: NavigationProp<any> }) {
  const [curtidas, setCurtidas] = useState<{ [key: string]: number }>({});

  const curtirPostagem = (id: string) => {
    setCurtidas({ ...curtidas, [id]: (curtidas[id] || 0) + 1 });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={viagensContatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <TouchableOpacity onPress={() => navigation.navigate('DetalhesPostagem', { viagem: item })}>
              <Text style={{ fontSize: 18 }}>{item.destination}</Text>
              <Text>{`Início: ${item.beggining} - Fim: ${item.end}`}</Text>
              <Text>{`Nota: ${item.rating}/5`}</Text>
            </TouchableOpacity>
            <Button title="Curtir" onPress={() => curtirPostagem(item.id)} />
            <Text>{curtidas[item.id] || 0} curtidas</Text>
          </View>
        )}
      />
    </View>
  );
}
