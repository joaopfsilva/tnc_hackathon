import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, TouchableOpacity, Image} from 'react-native';

const homeImg = require('../assets/main_image.png')

const HomepageScreen = (props) => {
  return(
    <View style={styles.container}>
      <ImageBackground source={homeImg} style={styles.image}>

        <Text style={{fontSize: 30, color: 'white', marginRight: 30, marginTop: 50, marginLeft: 30}}>Are you ready for a walk off?</Text>
        <TextInput style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white' }} placeholder='Fill in name...'/>

        <Text style={{flex: 0.7, width: 300}}></Text>
        <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate('Products')}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Let's do this!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => props.navigation.navigate('Score')}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Show me the scores</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  button1: {
    marginTop: 40,
    fontStyle: 'italic',
    backgroundColor: '#E4EEDB',
    borderRadius: 7,
    borderColor: '#fff',
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
    marginBottom: 10,
    width: 200,
    fontStyle: 'italic'
  },
  button2: {
    fontStyle: 'italic',
    borderRadius: 7,
    backgroundColor: '#CFCECE',
    borderColor: '#fff',
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
    marginBottom: 10,
    width: 200,
    fontStyle: 'italic'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400'
  },
  img: {
    flex: 0.3,
    width: 300,
    height: 300,
    padding: 50
  },
  btn: {
    color: 'white',
    backgroundColor: 'rgb(77,77,77)',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 40
  }
});

export default HomepageScreen;