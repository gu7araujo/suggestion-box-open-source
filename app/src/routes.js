import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

const AppStack = createStackNavigator();

import Inicio from './pages/Inicio';
import Cadastro from './pages/Cadastro';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Inicio" component={Inicio} />
        <AppStack.Screen name="Cadastro" component={Cadastro} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}