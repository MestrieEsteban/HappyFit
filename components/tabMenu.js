import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import style_tabmenu from '../css/style_tabMenu'

export default function tabMenu() {
  const navigation = useNavigation()

  return (
    <View style={style_tabmenu.container}>
      <TouchableOpacity
        style={style_tabmenu.button_icons}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <View style={style_tabmenu.icons}>
          <FontAwesome name="home" size={50} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style_tabmenu.button_icons}
        onPress={() => navigation.navigate('Mes Programmes')}
      >
        <View style={style_tabmenu.icons}>
          <AntDesign name="calendar" size={50} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style_tabmenu.button_icons}
        onPress={() => navigation.navigate('')}
      >
        <View style={style_tabmenu.icons}>
          <Octicons name="graph" size={50} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style_tabmenu.button_icons}
        onPress={() => navigation.navigate('Profil')}
      >
        <View style={style_tabmenu.icons}>
          <MaterialIcons name="account-circle" size={50} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  )
}
