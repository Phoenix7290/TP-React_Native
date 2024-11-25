import { View, StyleSheet } from 'react-native';
import TaskList from './TaskList.jsx';

export default function App() {
  const tasksByDay = [
    { title: 'Today', data: ['Buy bread', 'Exercise'] },
    { title: 'Tomorrow', data: ['Study React Native', 'Read a book'] },
    { title: 'Next Week', data: ['Organize the house'] },
  ];

  return (
    <View style={styles.container}>
      <TaskList tasksByDay={tasksByDay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
});
