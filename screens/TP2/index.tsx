import React from "react";
import { View, Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native";

type RootStackParamList = {
  [key: string]: { id: number };
};

export default function TP2() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView>
        <View>
          {Array.from({ length: 16 }, (_, i) => (
            <Button
              key={i}
              title={`Exercício - ${i + 1}`}
              onPress={() => navigation.navigate(`Exercício - ${i + 1}`, { id: i + 1 })}
            />
          ))}
        </View>
    </ScrollView>
  );
}
