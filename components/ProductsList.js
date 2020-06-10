import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import Product from './Product';

const backgroundImg = require('../assets/background_image.png')

const ProductsList = props => {
  const products = props.products;
  const [product, setProduct] = useState(products[0]);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.image}>
        <Product product={product}/>
      </ImageBackground>
      <TouchableOpacity style={styles.btn}>
        <Text style={{fontSize: 20, textAlign: 'center'}} onPress={ () => setProduct(products[(product.id + 1)%products.length])}>Next</Text>
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15,
    marginRight: -15,
    width: 320,
    paddingTop: 10,
    // paddingTop: 40,
    // paddingBottom: 40,
    // paddingRight: 10,
    // paddingLeft: 10,
  },
  btn: {
    marginTop: 10,
    fontStyle: 'italic',
    backgroundColor: '#5FBA7E',
    borderRadius: 7,
    borderColor: '#fff',
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
    marginBottom: 20,
    width: 200,
    fontStyle: 'italic'
  }
});

export default ProductsList;