import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles.tsx';

interface ResultProps {
  score: number;
  total: number;
}

function Result({ score, total }: ResultProps) {
  return (
    <View style={styles.optionsButton}>
      <Text>Quiz Finished!</Text>
      <Text>Your score is {score} out of {total}</Text>
    </View>
  );
}


export default Result;
