
import { View, Text, Button, FlatList } from 'react-native';

interface User {
    name: string;
    anwers: { [key: string]: any };
}

interface Props {
    anwers: { [key: string]: any };
    users: User[];
    switchScreen: () => void;
}

export default function Affinity({ anwers, users, switchScreen }: Props) {
    const calculateAffinity = (userResponse: { [x: string]: any; }) => {
        let affinity = 0;
        Object.keys(anwers).forEach((item) => {
            if (anwers[item] === userResponse[item]) {
                affinity += 1;
            }
        });
        return affinity;
    };

    const userCompability = users
        .map((User) => ({
            ...User,
            affinity: calculateAffinity(User.anwers),
        }))
        .sort((a, b) => b.affinity - a.affinity);

    return (
        <View>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Usuários com Afinidade:</Text>
            <FlatList
                data={userCompability}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10 }}>
                        <Text>{item.name} - affinity: {item.affinity}</Text>
                    </View>
                )}
            />
            <Button title="Voltar" onPress={switchScreen} />
        </View>
    );
}
