import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Pages
import Login from './pages/Login'
import Recupera from './pages/Recupera'
import Registro from './pages/Registro'
import AreaRestrita from './pages/AreaRestrita'

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        options={{headerShown:false}}
        component={Login} />
        <Stack.Screen
        name="AreaRestrita" 
        options={{headerShown:false}}
        component={AreaRestrita} />
        <Stack.Screen name="Recupera" component={Recupera} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
