import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AddMarker from './screens/AddMarker';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddMarker" component={AddMarker} options={{ title: 'Adicionar marcador' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
