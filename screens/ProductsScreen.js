import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import ProductsList from '../components/ProductsList';
import { PRODUCTS } from '../data/dummy-products';

const ProductsScreen = props => {
  const products = PRODUCTS;

  return(
    <View style={styles.container}>
        <ProductsList products={products} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default ProductsScreen;