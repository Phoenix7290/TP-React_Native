import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

interface TodoListProps {
  items: { name: string; category: string }[];
  addItem: (item: { name: string; category: string }) => void;
  deleteTask: (task: { name: string; category: string }) => void;
  editItem: (oldTask: { name: string; category: string }, newTask: { name: string; category: string }) => void;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ items, addItem, deleteTask, editItem, toggleDarkMode, isDarkMode }) => {
  const [createItem, setCreateItem] = useState('');
  const [createCategory, setCreateCategory] = useState('Escola');

  const handleAddItem = () => {
    addItem({ name: createItem, category: createCategory });
    setCreateItem('');
  };

  return (
    <View style={[styles.containerList, isDarkMode ? styles.dark : styles.light]}>
      <View style={styles.containerAdd}>
        <TextInput
          value={createItem}
          onChangeText={setCreateItem}
          placeholder="Nova Tarefa"
          style={styles.input}
        />
        <TextInput
          value={createCategory}
          onChangeText={setCreateCategory}
          placeholder="Categoria"
          style={styles.input}
        />
        <Button title="Adicionar" onPress={handleAddItem} />
      </View>
      <Button title="Toggle Dark mode" onPress={toggleDarkMode} />
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={deleteTask} onEdit={editItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAdd: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    marginRight: 5,
    borderRadius: 5,
  },
  light: {
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#333',
  },
});

export default TodoList;
