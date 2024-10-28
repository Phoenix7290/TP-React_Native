import { useState } from 'react';
import Question from './components/Question.tsx';
import Result from './components/Result.tsx';
import { View } from 'react-native';

import Style from "./styles";

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        answer: 'Paris'
    },
    {
        question: 'Who is CEO of Tesla Motors?',
        options: ['Bill Gates', 'Steve Jobs', 'Elon Musk', 'Tony Stark'],
        answer: 'Elon Musk'
    },
    {
        question: 'The iPhone was created by which company?',
        options: ['Apple', 'Intel', 'Amazon', 'Microsoft'],
        answer: 'Apple'
    },
    {
        question: 'How many Harry Potter books are there?',
        options: ['1', '4', '6', '7'],
        answer: '7'
    },
    {
        question: 'How many continents are there?',
        options: ['5', '6', '7', '8'],
        answer: '7'
    },
    {
        question: 'What is the capital of Portugal?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        answer: 'Lisbon'
    },
    {
        question: 'Who is CEO of SpaceX?',
        options: ['Bill Gates', 'Steve Jobs', 'Elon Musk', 'Tony Stark'],
        answer: 'Elon Musk'
    },
    {
        question: 'The Alexa model was created by which company?',
        options: ['Apple', 'Intel', 'Amazon', 'Microsoft'],
        answer: 'Amazon'
    },
    {
        question: 'How many Lord of the Rings books are there?',
        options: ['1', '3', '4', '7'],
        answer: '3'
    },
    {
        question: 'How many oceans are there?',
        options: ['3', '4', '5', '6'],
        answer: '5'
    }
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answer: string) => {
        if (answer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    return (
        <View style={Style.app}>
            {!showResult ? (
                <Question
                    question={questions[currentQuestion]}
                    handleAnswer={handleAnswer}
                />
            ) : (
                <Result score={score} total={questions.length} />
            )}
        </View>
    );
}

export default App;
