import React, { Component } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

<<<<<<< HEAD
import SplashScreen from './screens/SplashScreen'
import Questionnaire from './screens/Questionnaire'
import Introduction from './screens/Introduction'
import Nouveau_Programme from './screens/Nouveau_Programme'
import Mes_Programme from './screens/Mes_Programme'
import Details_Programme from './screens/Details_Programme'
import Programme_Choix_Muscle from './screens/Programme_Choix_Muscle'
=======
import Home from './screens/Home'
import ConnexionScreen from './screens/Connexion'
import InscriptionScreen from './screens/Inscription'
import MotdepasseoublieScreen from './screens/Motdepasseoublie'
import EmailenvoyeScreen from './screens/Emailenvoye'
import ResmotdepasseScreen from './screens/Resmotdepasse'
import MotdepassechangeScreen from './screens/Motdepassechange'
import SplashScreen from "./screens/SplashScreen";
>>>>>>> alexandre

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
<<<<<<< HEAD
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Mes Programmes">
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
=======
      <NavigationContainer initialRouteName="Splash Screen" headerMode="none">
        <Stack.Navigator>
          <Stack.Screen name="Splash Screen" component={SplashScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen name="Inscription" component={InscriptionScreen} />
          <Stack.Screen
            name="Motdepasseoublie"
            component={MotdepasseoublieScreen}
          />
          <Stack.Screen
            name="Emailenvoye"
            component={EmailenvoyeScreen}
          />
          <Stack.Screen
            name="Resmotdepasse"
            component={ResmotdepasseScreen}
          />
          <Stack.Screen
            name="Motdepassechange"
            component={MotdepassechangeScreen}
>>>>>>> alexandre
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
