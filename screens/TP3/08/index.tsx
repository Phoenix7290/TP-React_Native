import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Filter from './Filter';
import ProductList from './ProductList';

const productsData = [
    { id: '1', name: 'T-Shirt', description: 'White cotton t-shirt' },
    { id: '2', name: 'Sneakers', description: 'Comfortable sports sneakers' },
    { id: '3', name: 'Cap', description: 'Adjustable black cap' },
    { id: '4', name: 'Jeans', description: 'Dark blue jeans' },
    { id: '5', name: 'Jacket', description: 'Synthetic leather jacket' },
];

export default function App() {
    const [products, setProducts] = useState(productsData);

    const filterProducts = (text: string) => {
        const filtered = productsData.filter(product =>
            product.name.toLowerCase().includes(text.toLowerCase()) ||
            product.description.toLowerCase().includes(text.toLowerCase())
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
