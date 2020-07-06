import React, { Component } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ConnexionScreen from './screens/Connexion'
import Introduction1Screen from './screens/Introduction1'
import Introduction2Screen from './screens/Introduction2'
import Introduction3Screen from './screens/Introduction3'
import InscriptionScreen from './screens/Inscription'
import MotdepasseoublieScreen from './screens/Motdepasseoublie'
import EmailenvoyeScreen from './screens/Emailenvoye'
import ResmotdepasseScreen from './screens/Resmotdepasse'
import MotdepassechangeScreen from './screens/Motdepassechange'

const Stack = createStackNavigator()
console.disableYellowBox = true

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
    }
  }

  async componentDidMount() {
    this.load_policy()
  }

  async load_policy() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      space_mono: require('./assets/fonts/SpaceMono-Regular.ttf'),
      ...Ionicons.font,
    })
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Introduction1"
            component={Introduction1Screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Introduction2"
            component={Introduction2Screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Introduction3"
            component={Introduction3Screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen name="Inscription" component={InscriptionScreen} />
          <Stack.Screen
            name="Motdepasseoublie"
            component={MotdepasseoublieScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Emailenvoye"
            component={EmailenvoyeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Resmotdepasse"
            component={ResmotdepasseScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Motdepassechange"
            component={MotdepassechangeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
