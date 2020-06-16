import React, { Component } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './screens/SplashScreen'
import Questionnaire from './screens/Questionnaire'
import ValidationQuestionnaire from './screens/ValidationQuestionnaire'

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
        <Stack.Navigator headerMode="none" initialRouteName="Questionnaire">
          <Stack.Screen name="Spash Screen" component={SplashScreen} />
          <Stack.Screen name="Questionnaire" component={Questionnaire} />
          <Stack.Screen
            name="Validation Questionnaire"
            component={ValidationQuestionnaire}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
