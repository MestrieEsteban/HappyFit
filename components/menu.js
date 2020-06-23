import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import {
  FontAwesome,
  AntDesign,
  Octicons,
  MaterialIcons,
} from '@expo/vector-icons'
import style_tabmenu from '../css/style_tabMenu'
export default class Menu extends Component {
  render() {
    return (
      <View style={style_tabmenu.container}>
        <TouchableOpacity style={style_tabmenu.button_icons}>
          <View style={style_tabmenu.icons}>
            <FontAwesome name="home" size={50} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style_tabmenu.button_icons}>
          <View style={style_tabmenu.icons}>
            <AntDesign name="calendar" size={50} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style_tabmenu.button_icons}>
          <View style={style_tabmenu.icons}>
            <Octicons name="graph" size={50} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style_tabmenu.button_icons}>
          <View style={style_tabmenu.icons}>
            <MaterialIcons name="account-circle" size={50} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
