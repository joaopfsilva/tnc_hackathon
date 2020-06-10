import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import Products from '../components/ProductsList';
import { PRODUCTS } from '../data/dummy-products';


const ProductsScreen = props => {
  const products = PRODUCTS;

  return(
    <View style={styles.container}>
      <Products {...products} />
      <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn: {
    marginTop: 40,
    fontStyle: 'italic',
    backgroundColor: '#5FBA7E',
    borderRadius: 7,
    borderColor: '#fff',
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
    marginBottom: 50,
    width: 200,
    fontStyle: 'italic'
  }
});

export default ProductsScreen;