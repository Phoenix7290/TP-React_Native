import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Filter from './Filter.jsx';
import ProductList from './ProductList.jsx';

const productsData = [
    { id: '1', name: 'Shirt' },
    { id: '2', name: 'Boots' },
    { id: '3', name: 'Hat' },
    { id: '4', name: 'Pants' },
    { id: '5', name: 'Coat' },
];

export default function App() {
    const [products, setProducts] = useState(productsData);

    const filterProducts = (text: string) => {
        const filtered = productsData.filter(product =>
            product.name.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filtered);
    };

    return (
        <View style={styles.container}>
            <Filter onFilter={filterProducts} />
            <ProductList products={products} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
});
