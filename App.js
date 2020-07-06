import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/Home'
import ConnexionScreen from './screens/Connexion'
import Introduction1Screen from './screens/Introduction1';
import Introduction2Screen from './screens/Introduction2';
import Introduction3Screen from './screens/Introduction3';
import InscriptionScreen from './screens/Inscription';
import MotdepasseoublieScreen from './screens/Motdepasseoublie';
import EmailenvoyeScreen from './screens/Emailenvoye';
import ResmotdepasseScreen from './screens/Resmotdepasse';
import MotdepassechangeScreen from './screens/Motdepassechange';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Introduction1" component={Introduction1Screen} options={{ headerShown: false }} />
      <Stack.Screen name="Introduction2" component={Introduction2Screen} options={{ headerShown: false }} />
      <Stack.Screen name="Introduction3" component={Introduction3Screen} options={{ headerShown: false }} />
      <Stack.Screen name="Connexion" component={ConnexionScreen} />
      <Stack.Screen name="Inscription" component={InscriptionScreen} />
      <Stack.Screen name="Motdepasseoublie" component={MotdepasseoublieScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Emailenvoye" component={EmailenvoyeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Resmotdepasse" component={ResmotdepasseScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Motdepassechange" component={MotdepassechangeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}