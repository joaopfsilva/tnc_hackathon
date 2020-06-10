import React from 'react';

import Product from './Product';

const ProductsList = props => {
  const products = props.products;

  return (
    products.map( p => {
      <Product {...product}/>
    })
  )
}