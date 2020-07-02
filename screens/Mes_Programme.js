import React, { Component } from 'react'
import {
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import style_list_programme from '../css/style_new_programme'
import validate from '../css/style_validate'

export default class Mes_Programmes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      programme: [
        {
          id: 1,
          label: 'programme',
        },
        {
          id: 2,
          label: 'programme',
        },
        {
          id: 3,
          label: 'programme',
        },
      ],
      page: 0,
      index: 0,
      status: false,
      timePassed: false,
    }
  }

  componentDidMount() {
    this.status()
  }

  status = () => {
    if (this.props.router !== undefined) {
      this.setState({ status: true })
      setTimeout(() => this.setState({ timePassed: true }), 5000)
    }
  }

  loading() {
    return (
      <View style={validate.container}>
        <View style={validate.border_title}></View>
        <View style={validate.view_title}>
          <Text style={validate.title}>Mumble prépare ton</Text>
          <Text style={validate.title}>nouveau programme</Text>
        </View>
        <View style={validate.border_image}></View>
        <View style={validate.view_image}>
          <Image
            source={require('../assets/images/loading.gif')}
            style={validate.image}
          />
        </View>
      </View>
    )
  }

  list_programme() {
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flex: 0.2 }}></View>
        <View style={{ flex: 0.3 }}>
          <View
            style={{
              flex: 0.9,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20 }}>
              Mes programmes
            </Text>
            <Entypo
              style={{ marginLeft: 20 }}
              name="dots-three-vertical"
              size={30}
              color="black"
            />
          </View>
          <View
            style={{ backgroundColor: 'black', height: 1, width: width / 2 }}
          />
        </View>
        <View style={{ flex: 0.1 }}></View>
        <FlatList
          data={this.state.programme}
          style={style_list_programme.heigth_list}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={{
                  borderColor: '#3598DA',
                  borderWidth: 1,
                  backgroundColor: '#3598DA',
                  width: width / 2 - 20,
                  height: 40,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: 'left',
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 20 }}>
                    {item.label} {item.id}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={{ marginTop: 20 }}></View>
            </View>
          )}
        />
      </View>
    )
  }

  render() {
    return !this.state.timePassed && this.props.router !== undefined
      ? this.loading()
      : this.list_programme()
  }
}
