
import { View, Text, FlatList } from 'react-native';

const friends = [
  { id: '1', name: 'João' },
  { id: '2', name: 'Maria' },
];

export default function Friends() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
