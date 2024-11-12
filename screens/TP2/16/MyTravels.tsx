
import { View, Text, FlatList } from 'react-native';

const myTravels = [
  { id: '1', destination: 'Londres', fromPlace: '2023-12-01', toPlace: '2023-12-10', rating: 4 },
];

export default function MyTravels() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={myTravels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18 }}>{item.destination}</Text>
            <Text>{`Início: ${item.fromPlace} - Fim: ${item.toPlace}`}</Text>
            <Text>{`Nota: ${item.rating}/5`}</Text>
          </View>
        )}
      />
    </View>
  );
}
