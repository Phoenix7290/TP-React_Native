import { useState } from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import Questao from './components/Question.jsx';
import BarraProgresso from './components/ProgressBar.jsx';

const Stack = createStackNavigator();

const questions = [
    { question: 'What is the capital of Brazil?', options: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'] },
    { question: 'What is the largest ocean in the world?', options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'] },
    { question: 'Who was the first president of the United States?', options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'] },
    { question: 'What is the chemical formula of water?', options: ['H2O', 'CO2', 'O2', 'NaCl'] },
    { question: 'What is the most populous country in the world?', options: ['India', 'United States', 'China', 'Indonesia'] },
    { question: 'What is the highest mountain in the world?', options: ['K2', 'Kangchenjunga', 'Everest', 'Lhotse'] },
    { question: 'What is the smallest country in the world?', options: ['Monaco', 'Vatican', 'San Marino', 'Liechtenstein'] },
    { question: 'Who wrote "Hamlet"?', options: ['Charles Dickens', 'Mark Twain', 'William Shakespeare', 'Jane Austen'] },
    { question: 'What is the largest desert in the world?', options: ['Sahara', 'Gobi', 'Kalahari', 'Antarctic'] },
    { question: 'What is the official currency of Japan?', options: ['Yuan', 'Won', 'Yen', 'Rupee'] },
];

export default function App() {
    const [progress, setProgress] = useState(0);

    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {questions.map((question, index) => (
                        <Stack.Screen key={index} name={`Question${index}`}>
                            {() => (
                                <View style={styles.container}>
                                    <BarraProgresso progress={(index + 1) / questions.length} />
                                    <Questao
                                        question={question.question}
                                        options={question.options}
                                        onNext={() => {
                                            setProgress((index + 1) / questions.length);
                                        }}
                                        nextScreen={`Question${index + 1}`}
                                    />
                                </View>
                            )}
                        </Stack.Screen>
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
});
