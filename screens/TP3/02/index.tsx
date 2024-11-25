import { View, StyleSheet } from 'react-native';
import List from './List.jsx';

export default function App() {
    const tasks = [
        { id: 1, name: 'Buy bread' },
        { id: 2, name: 'Exercise' },
        { id: 3, name: 'Study React Native' },
        { id: 4, name: 'Read a book' },
        { id: 5, name: 'Organize the house' },
        { id: 6, name: 'Buy bread' },
        { id: 7, name: 'Exercise' },
        { id: 8, name: 'Study React Native' },
        { id: 9, name: 'Read a book' },
        { id: 10, name: 'Organize the house' },
        { id: 11, name: 'Buy bread' },
        { id: 12, name: 'Exercise' },
        { id: 13, name: 'Study React Native' },
        { id: 14, name: 'Read a book' },
        { id: 15, name: 'Organize the house' },
        { id: 16, name: 'Buy bread' },
        { id: 17, name: 'Exercise' },
        { id: 18, name: 'Study React Native' },
        { id: 19, name: 'Read a book' },
        { id: 20, name: 'Organize the house' },
    ];

    return (
        <View style={styles.container}>
            <List items={tasks} />
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
