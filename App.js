import React, { Component } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from "./navigation/BottomTabNavigator";

const Stack = createStackNavigator();
console.disableYellowBox = true;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      spac_mono: require('./assets/fonts/SpaceMono-Regular.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render(){

    if (!this.state.isReady) {
      return <AppLoading/>;
    }

    return(
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Accueil" component={BottomTabNavigator}/>
          </Stack.Navigator>
        </NavigationContainer>

    )
  }
}
