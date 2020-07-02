import React, { Component } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
/* toutes les Pages*/
import SplashScreen from './screens/SplashScreen'
import Questionnaire from './screens/Questionnaire'
import Validation_Questionnaire from './screens/Validation_Questionnaire'
import Dashboard from './screens/Dashboad'
import Maseance from './screens/Maseance'
import Suiveseance from './screens/Suivieseance'
// import Editexercice from './screens/Editexercice'
// import Choixexercice from './screens/Choixexercice'
// import Ajoutexercice from './screens/Ajoutexercice'

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
        <Stack.Navigator headerMode="none" initialRouteName="Overflow">
          <Stack.Screen name="Suiveseance" component={Suiveseance} />
          <Stack.Screen name="Maseance" component={Maseance} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Spash Screen" component={SplashScreen} />
          <Stack.Screen name="Questionnaire" component={Questionnaire} />
          <Stack.Screen
            name="Validation Questionnaire"
            component={Validation_Questionnaire}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
