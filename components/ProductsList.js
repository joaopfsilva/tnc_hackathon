import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Product from './Product';

const backgroundImg = require('../assets/background_image.png')

const ProductsList = props => {
  const products = props.products;

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.image}>
        <Product product={products[0]}/>
      </ImageBackground>
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
  }
});

export default ProductsList;