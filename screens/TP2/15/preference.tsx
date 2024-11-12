import { useState } from 'react';
import { View, Text, Button } from 'react-native';

interface PreferenceProps {
  itens: string[];
  response: { [key: string]: boolean };
  setResponse: (response: { [key: string]: boolean }) => void;
  switchScreen: () => void;
}

export default function Preferencia({ itens, response, setResponse, switchScreen }: PreferenceProps ) {
  const [indiceAtual, setIndiceAtual] = useState(0); 

  const responder = (gosta: boolean) => {
    const itemAtual = itens[indiceAtual];
    setResponse({ ...response, [itemAtual]: gosta });

    if (indiceAtual < itens.length - 1) {
      setIndiceAtual(indiceAtual + 1);
    } else {
      switchScreen(); 
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Você gosta de:</Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>{itens[indiceAtual]}</Text>
      <Button title="Sim" onPress={() => responder(true)} />
      <Button title="Não" onPress={() => responder(false)} />
    </View>
  );
}
