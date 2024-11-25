
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const List = ({ items }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {items.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.texto}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});

export default List;
