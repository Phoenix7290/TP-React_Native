import React from "react";
import { View, Text } from 'react-native';
import CardMovie from "./components/CardMovie";

export default function App() {
    const movie = {
        img: "https://th.bing.com/th/id/OIP.611QCafpYEN0ak-bkiC8HgHaJQ?rs=1&pid=ImgDetMain",
        title: 'Robo Selvagem',
        year: 2024,
        rating: 9,
    }

    return (
        <View>
            <CardMovie movie={movie}></CardMovie>
        </View>
    )
}