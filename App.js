import React, { Component } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './screens/SplashScreen'
import Home from './screens/Home'
import Inscription from './screens/Inscription'
import Connexion from './screens/Connexion'
import Questionnaire from './screens/Questionnaire'
import Introduction from './screens/Introduction'
import Nouveau_Programme from './screens/Nouveau_Programme'
import Mes_Programme from './screens/Mes_Programme'
import Details_Programme from './screens/Details_Programme'
import Programme_Choix_Muscle from './screens/Programme_Choix_Muscle'
import Dashboard from './screens/Dashboad'
import Maseance from './screens/Maseance'
import Suiveseance from './screens/Suivieseance'
import Editexercice from './screens/Editexercice'
import Choixexercice from './screens/Choixexercice'
import Ajoutexercice from './screens/Ajoutexercice'
import Addexercice from './screens/Addexercice'
import Profil from './screens/Profil'
import Infoaide from './screens/Infoaide'
import Editprofil from './screens/EditProfil'
import Mdpreni from './screens/Mdpreni'
import Mdpoublie from './screens/Mdpoublie'
import Mdpreccu from './screens/Mdpreccu'

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
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Splash Screen" component={SplashScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Inscription" component={Inscription} />
          <Stack.Screen name="Connexion" component={Connexion} />
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
          <Stack.Screen name="Mdpreccu" component={Mdpreccu} />
          <Stack.Screen name="Mdpoublie" component={Mdpoublie} />
          <Stack.Screen name="Mdpreni" component={Mdpreni} />
          <Stack.Screen name="Editprofil" component={Editprofil} />
          <Stack.Screen name="Aideinfo" component={Infoaide} />
          <Stack.Screen name="Profil" component={Profil} />
          <Stack.Screen name="Maseance" component={Maseance} />
          <Stack.Screen name="Addexercice" component={Addexercice} />
          <Stack.Screen name="Ajoutexercice" component={Ajoutexercice} />
          <Stack.Screen name="Choixexercice" component={Choixexercice} />
          <Stack.Screen name="Editexercice" component={Editexercice} />
          <Stack.Screen name="Suiveseance" component={Suiveseance} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
