import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Detalhes from '../Screens/Detalhes'

const Stack = createNativeStackNavigator();

function routes() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen 
        name="Detalhes" 
        component={Detalhes}
        options={{
            headerShown: false
        }}
        />
      </Stack.Navigator>
  );
}

export default routes;