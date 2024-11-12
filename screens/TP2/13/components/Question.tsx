import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles.tsx";

interface QuestionProps {
  question: {
    question: string;
    options: string[];
    answer: string;
  };
  handleAnswer: (answer: string) => void;
}

function Question({ question, handleAnswer }: QuestionProps) {
  return (
    <View style={styles.questionContainer}>
      <Text>{question.question}</Text>
      <View style={styles.optionsButton}>
        {question.options.map((option, index) => (
          <View key={index} style={styles.optionsText}>
            <Button
              title={option}
              onPress={() => handleAnswer(option)}
              color="black"
            />
          </View>
        ))}
      </View>
    </View>
  );
}

export default Question;
