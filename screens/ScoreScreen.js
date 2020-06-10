import React from 'react';
import { StyleSheet, View, Text, FlatList, Image} from 'react-native';

import { USERS } from '../data/dummy-users';

const renderGridItem = itemData => {
  return (
    <View style={styles.container}>
      <Text>{itemData.item.username}</Text>
      <Text style={{marginLeft: 50}}>{itemData.item.score}</Text>
    </View>
  )
}

const ScoreScreen = props => {
  return(
    <View style={styles}>
      <Text>Score screen</Text>
      <FlatList
        data={USERS}
        renderItem={renderGridItem}
        numColumns={1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ScoreScreen;