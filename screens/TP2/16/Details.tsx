
import { View, Text } from 'react-native';

import { RouteProp } from '@react-navigation/native';

type RouteParams = {
  params: {
    travel: {
      destination: string;
      fromPlace: string;
      toPlace: string;
      nota: number;
    };
  };
};

export default function DetalhesPostagem({ route }: { route: RouteProp<RouteParams, 'params'> }) {
  const { travel } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{travel.destination}</Text>
      <Text>{`Início: ${travel.fromPlace} - Fim: ${travel.toPlace}`}</Text>
      <Text>{`Nota: ${travel.nota}/5`}</Text>
      <Text style={{ marginTop: 20 }}>Detalhes completos da travel...</Text>
    </View>
  );
}
