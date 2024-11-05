import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

interface TodoItemProps {
  item: { name: string; category: string };
  onDelete: (item: { name: string; category: string }) => void;
  onEdit: (oldItem: { name: string; category: string }, newItem: { name: string; category: string }) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onDelete, onEdit }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(item.name);
  const [editCategory, setEditCategory] = useState(item.category);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDeleteItem = () => {
    onDelete(item);
  };

  const handleEditItem = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveItem = () => {
    onEdit(item, { name: editItem, category: editCategory });
    setIsEditing(false);
  };

  return (
    <View style={styles.itemList}>
      {isEditing ? (
        <>
          <TextInput value={editItem} onChangeText={setEditItem} style={styles.input} />
          <TextInput value={editCategory} onChangeText={setEditCategory} style={styles.input} />
        </>
      ) : (
        <Text style={{ color: isCompleted ? 'green' : 'black' }}>
          {item.name} ({item.category})
        </Text>
      )}
      <Button title={isCompleted ? 'Desmarcar' : 'Concluir'} onPress={handleComplete} />
      <Button title="Editar" onPress={handleEditItem} />
      {isEditing && <Button title="Salvar" onPress={handleSaveItem} />}
      <Button title="Excluir" onPress={handleDeleteItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default TodoItem;
