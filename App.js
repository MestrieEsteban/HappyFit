import React, { Component } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './screens/SplashScreen'
import Questionnaire from './screens/Questionnaire'
import Validation_Questionnaire from './screens/Validation_Questionnaire'
import Introduction from './screens/Introduction'
import Chargement_Programme from './screens/Chargement_Programme'
import Nouveau_Programme from './screens/Nouveau_Programme'

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
        <Stack.Navigator headerMode="none" initialRouteName="Nouveau Programme">
          <Stack.Screen name="Splash Screen" component={SplashScreen} />
          <Stack.Screen name="Questionnaire" component={Questionnaire} />
          <Stack.Screen
            name="Validation Questionnaire"
            component={Validation_Questionnaire}
          />
          <Stack.Screen name="Introduction" component={Introduction} />
          <Stack.Screen
            name="Chargement Programme"
            component={Chargement_Programme}
          />
          <Stack.Screen
            name="Nouveau Programme"
            component={Nouveau_Programme}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
