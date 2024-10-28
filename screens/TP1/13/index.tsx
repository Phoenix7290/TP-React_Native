import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import TodoList from './Components/TodoList';

interface Task {
  name: string;
  category: string;
}

export default function App() {
  const [items, setItems] = useState<Task[]>([
    { name: 'Mercado', category: 'Comida' },
    { name: 'Farmácia', category: 'Saúde' },
    { name: 'Estudos', category: 'Escola' },
    { name: 'Sofrimento [Opcional]', category: 'Trabalho' },
  ]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addItem = (task: Task) => {
    setItems([...items, task]);
  };

  const deleteTask = (task: Task) => {
    setItems(items.filter((item) => item.name !== task.name));
  };

  const editItem = (oldTask: Task, newTask: Task) => {
    const newItems = items.map((item) =>
      item.name === oldTask.name ? newTask : item
    );
    setItems(newItems);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.container}>
      <TodoList
        items={items}
        addItem={addItem}
        deleteTask={deleteTask}
        editItem={editItem}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
