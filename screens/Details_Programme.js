import React, { Component } from 'react'
import {
  FlatList,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import style_programme from '../css/style_programme'
import style_list_programme from '../css/style_programme'

export default class Details_Programme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercice: [
        {
          id: 1,
          label: 'exercice',
          serie: 4,
          repetition: 40,
          pause: "1'30",
          show: false,
        },
        {
          id: 2,
          label: 'exercice',
          serie: 4,
          repetition: 40,
          pause: "1'30",
          show: false,
        },
        {
          id: 3,
          label: 'exercice',
          serie: 4,
          repetition: 40,
          pause: "1'30",
          show: false,
        },
      ],
      show: false,
      show_list: false,
    }
  }

  componentDidMount() {}

  update(id) {
    let list_data = []
    if (!this.state.show) {
      this.setState({ show: true })
    } else {
      this.setState({ show: false })
    }

    for (let i = 0; i < this.state.exercice.length; i++) {
      if (i === id - 1) {
        list_data.push({
          id: this.state.exercice[i].id,
          label: this.state.exercice[i].label,
          serie: this.state.exercice[i].serie,
          repetition: this.state.exercice[i].repetition,
          pause: this.state.exercice[i].pause,
          show: this.state.show,
        })
      } else {
        list_data.push({
          id: this.state.exercice[i].id,
          label: this.state.exercice[i].label,
          serie: this.state.exercice[i].serie,
          repetition: this.state.exercice[i].repetition,
          pause: this.state.exercice[i].pause,
          show: this.state.exercice[i].show,
        })
      }
    }
    this.setState({ exercice: list_data })

    let compteur = 0
    for (let i = 0; i < this.state.exercice.length; i++) {
      if (this.state.exercice[i].show) {
        compteur++
      }
    }

    if (compteur !== 0) {
      this.setState({ show_list: true })
    } else {
      this.setState({ show_list: false })
    }
  }

  render() {
    return (
      <View style={style_programme.container}>
        <View style={style_programme.border_list_2}></View>
        {!this.state.show_list ? (
          <View style={style_programme.border_title_3}>
            <View style={style_programme.border_before_arrow}></View>
            <TouchableOpacity
              onPress={() => this.props.navigation.replace('Mes Programmes')}
            >
              <FontAwesome5 name="arrow-left" size={30} color="black" />
            </TouchableOpacity>
            <View style={style_programme.border_arrow_title}></View>
            <Text style={style_programme.title_text}>
              Programme {this.props.route.params.id}{' '}
            </Text>
            <View style={style_programme.margin_title_3}></View>
          </View>
        ) : (
          <View style={style_programme.placement_title_2}>
            <TouchableOpacity
              onPress={() => this.props.navigation.replace('Mes Programmes')}
            >
              <FontAwesome5 name="arrow-left" size={30} color="black" />
            </TouchableOpacity>
            <View style={style_programme.margin_title_4}></View>
            <TouchableOpacity onPress={() => this.Delete()}>
              <MaterialCommunityIcons name="delete" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="edit" size={30} color="black" />
            </TouchableOpacity>
          </View>
        )}
        <View style={style_programme.line_title} />
        <View style={style_programme.border_list_2}></View>
        <FlatList
          data={this.state.exercice}
          style={style_programme.heigth_list}
          renderItem={({ item }) => (
            <View style={style_programme.margin_list}>
              {!item.show ? (
                <TouchableOpacity onPress={() => this.update(item.id)}>
                  <View style={style_programme.option_programme_hidden}>
                    <View style={style_programme.border_text_up}></View>
                    <View style={style_programme.placement_programme}>
                      <Text
                        style={[
                          style_programme.text_up,
                          style_programme.size_text_up,
                        ]}
                      >
                        {item.label}{' '}
                      </Text>
                      <Text
                        style={[
                          style_programme.text_up,
                          style_programme.size_text_up,
                        ]}
                      >
                        {item.id}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this.update(item.id)}>
                  <View style={style_programme.option_programme_show}>
                    <View style={style_programme.border_text_up}></View>
                    <View style={style_programme.placement_programme}>
                      <Text
                        style={[
                          style_programme.text_up,
                          style_programme.size_text_up,
                        ]}
                      >
                        {item.label}{' '}
                      </Text>
                      <Text
                        style={[
                          style_programme.text_up,
                          style_programme.size_text_up,
                        ]}
                      >
                        {item.id}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              {item.show ? (
                <View style={style_list_programme.border_down}>
                  <View style={style_list_programme.placement_text_down}>
                    <View style={style_list_programme.border_text_down}></View>
                    <Text style={style_list_programme.text_down}>
                      nombres de séries: {item.serie}
                    </Text>
                    <Text style={style_list_programme.text_down}>
                      nombres de répétitions: {item.repetition}
                    </Text>
                    <Text style={style_list_programme.text_down}>
                      temps de pause: {item.pause}
                    </Text>
                  </View>
                </View>
              ) : (
                <View></View>
              )}
              <View style={style_programme.espacement_programme}></View>
            </View>
          )}
        />
        <View style={style_programme.border_add_2}>
          <TouchableOpacity onPress={() => this.props.navigation.replace('Programme Choix Muscle')}>
            <AntDesign name="pluscircleo" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
