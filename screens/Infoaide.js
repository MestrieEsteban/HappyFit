import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import infoaide from '../css/style_infoaide'

export default class Infoaide extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={infoaide.container}>
        <View style={infoaide.container1}>
          <View>
            <Text style={infoaide.h2}>
              <AntDesign name="infocirlce" size={24} color="black" /> Infos &
              Aide
            </Text>
          </View>
        </View>

        <View style={infoaide.container2}>
          <View style={infoaide.souscontainer2}>
            <View>
              <Text
                style={infoaide.underline}
                onPress={() => this.navigation()}>
                {' '}
                <Entypo name="eye" size={24} color="black" /> Revoir
                l'introduction{' '}
              </Text>
            </View>

            <View>
              <Text
                style={infoaide.underline}
                onPress={() => this.navigation()}
              >
                {' '}
                Envoyer un mail{' '}
              </Text>
            </View>
          </View>
        </View>

        <View style={infoaide.container21}>
          <Text style={infoaide.text2}> Happy fit</Text>
        </View>

        <View style={infoaide.container3}></View>
      </View>
    )
  }
}
