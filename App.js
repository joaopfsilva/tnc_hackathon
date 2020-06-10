import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePageScreen from './screens/HomepageScreen';
import ProductsScreen from './screens/ProductsScreen';
import ScoreScreen from './screens/ScoreScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={HomePageScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Score" component={ScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;