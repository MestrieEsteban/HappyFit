import React, { Component } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import style_programme from '../css/style_programme'
import style_muscle from "../css/style_muscle";

export default class Programme_Choix_Muscle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      muscle: [
        {
          id: 1,
          label: 'Biceps',
        },
        {
          id: 2,
          label: 'Triceps',
        },
        {
          id: 3,
          label: 'Pectoraux',
        },
        {
          id: 4,
          label: 'Abdos',
        },
        {
          id: 5,
          label: 'Fessiers',
        },
        {
          id: 6,
          label: 'Mollets',
        },
      ],
    }
  }

  componentDidMount() {}

  render() {
    return (
      <View style={style_programme.container}>
        <View style={style_programme.border_list}></View>
        <View style={style_programme.border_title_2}>
          <View style={style_muscle.margin_arrow}>
            <TouchableOpacity
              onPress={() => this.props.navigation.replace('Mes Programmes')}
            >
              <FontAwesome5 name="arrow-left" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={style_muscle.title}> Quel muscle ?</Text>
        <View style={style_programme.border_list}></View>
        <FlatList
          data={this.state.muscle}
          style={style_programme.heigth_list}
          renderItem={({ item }) => (
            <View style={style_programme.margin_list}>
              <TouchableOpacity
                style={style_muscle.border_btn}
              >
                <Text style={style_muscle.title_btn}>{item.label}</Text>
              </TouchableOpacity>
              <View style={style_programme.espacement_programme}></View>
            </View>
          )}
        />
      </View>
    )
  }
}
