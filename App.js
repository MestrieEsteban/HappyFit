import React, { Component } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './screens/SplashScreen'
import Home from './screens/Home'
import Inscription from "./screens/Inscription";
import Connexion from "./screens/Connexion"
import Questionnaire from './screens/Questionnaire'
import Introduction from './screens/Introduction'
import Nouveau_Programme from './screens/Nouveau_Programme'
import Mes_Programme from './screens/Mes_Programme'
import Details_Programme from './screens/Details_Programme'
import Programme_Choix_Muscle from './screens/Programme_Choix_Muscle'

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
        <Stack.Navigator headerMode="none" initialRouteName="Splash Screen">
          <Stack.Screen name="Splash Screen" component={SplashScreen} />
          <Stack.Screen name="Questionnaire" component={Questionnaire} />
          <Stack.Screen name="Introduction" component={Introduction} />
          <Stack.Screen
            name="Nouveau Programme"
            component={Nouveau_Programme}
          />
          <Stack.Screen name="Mes Programmes" component={Mes_Programme} />
          <Stack.Screen
            name="Details Programmes"
            component={Details_Programme}
          />
          <Stack.Screen
            name="Programme Choix Muscle"
            component={Programme_Choix_Muscle}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
