import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button} from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

const Product = props => {
  const [gestureName, setGestureName] = useState('Not classified');

  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        setGestureName('T-Shirt');
        break;
      case SWIPE_DOWN:
        setGestureName('Longsleeve Top');
        break;
      case SWIPE_LEFT:
        setGestureName('Not classified');
        break;
      case SWIPE_RIGHT:
        setGestureName('Sleeveless Top');
        break;
    }
  }

  return(
    <GestureRecognizer onSwipe={(direction, state) => onSwipe(direction, state)}>
      <View style={styles.container}>
        <Image source={{uri: props.image_url}} style={styles.img}/>
        <Text>{gestureName}</Text>
      </View>
    </GestureRecognizer>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  img: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 150,
    borderRadius: 8,
    backgroundColor: 'rgb(0, 179, 134)',
    padding: 15
  }
});

export default Product;