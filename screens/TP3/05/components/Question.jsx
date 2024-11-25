import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Question = ({ question, options, onNext, nextScreen }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <Button key={index} title={option} onPress={() => {}} />
      ))}
      <Button
        title="Next"
        onPress={() => {
          onNext();
          navigation.navigate(nextScreen);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Question;
