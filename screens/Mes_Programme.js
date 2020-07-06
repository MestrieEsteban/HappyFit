import React, { Component } from 'react'
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import Modal from 'modal-react-native-web'

import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import CheckBox from 'react-native-checkbox-component'

import style_modal from '../css/style_modal'
import style_programme from '../css/style_programme'
import validate from '../css/style_validate'
import TabMenu from '../components/tabMenu'

export default class Mes_Programme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      programme: [
        {
          id: 1,
          label: 'Programme 1',
          show: false,
          case_checked: [],
          notification: 0,
        },
        {
          id: 2,
          label: 'Programme 2',
          show: false,
          case_checked: [],
          notification: 0,
        },
        {
          id: 3,
          label: 'Programme 3',
          show: false,
          case_checked: [],
          notification: 0,
        },
      ],
      days: [
        {
          id: 1,
          label: 'L',
        },
        {
          id: 2,
          label: 'M',
        },
        {
          id: 3,
          label: 'M',
        },
        {
          id: 4,
          label: 'J',
        },
        {
          id: 5,
          label: 'V',
        },
        {
          id: 6,
          label: 'S',
        },
        {
          id: 7,
          label: 'D',
        },
      ],
      timePassed: false,
      show: false,
      show_list: false,
      status: false,
      Modalvisible: false,
    }
  }

  componentDidMount() {
    this.load_data()
    this.status()
  }

  setModalStatus() {
    if (!this.state.Modalvisible) {
      this.setState({ Modalvisible: true })
    }
  }

  status = () => {
    if (this.props.route.params !== undefined) {
      this.setState({ status: true })
      setTimeout(() => this.setState({ timePassed: true }), 5000)
    }
  }

  loading = () => {
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

  load_data = () => {
    let check = []
    for (let i in this.state.days) {
      check.push({
        id: this.state.days[i].id,
        label: this.state.days[i].label,
        checked: false,
      })
    }
    let list_data = []
    for (let i in this.state.programme) {
      list_data.push({
        id: this.state.programme[i].id,
        label: this.state.programme[i].label,
        show: this.state.programme[i].show,
        case_checked: check,
        notification: this.state.programme[i].notification,
      })
    }
    this.setState({ programme: list_data })
  }

  update(id) {
    let list_data = []
    if (!this.state.show) {
      this.setState({ show: true })
    } else {
      this.setState({ show: false })
    }

    for (let i = 0; i < this.state.programme.length; i++) {
      if (i === id - 1) {
        list_data.push({
          id: this.state.programme[i].id,
          label: this.state.programme[i].label,
          show: this.state.show,
          case_checked: this.state.programme[i].case_checked,
          notification: this.state.programme[i].notification,
        })
      } else {
        list_data.push({
          id: this.state.programme[i].id,
          label: this.state.programme[i].label,
          show: this.state.programme[i].show,
          case_checked: this.state.programme[i].case_checked,
          notification: this.state.programme[i].notification,
        })
      }
    }

    this.setState({ programme: list_data })

    let compteur = 0
    for (let i = 0; i < this.state.programme.length; i++) {
      if (this.state.programme[i].show) {
        compteur++
      }
    }

    if (compteur !== 0) {
      this.setState({ show_list: true })
    } else {
      this.setState({ show_list: false })
    }
  }

  check_days(program, check_id) {
    let list_data = []
    let check = []
    for (let i = 0; i < this.state.days.length; i++) {
      if (i === check_id - 1) {
        if (!this.state.programme[program - 1].case_checked[i].checked) {
          check.push({
            id: this.state.programme[program - 1].case_checked[i].id,
            label: this.state.programme[program - 1].case_checked[i].label,
            checked: true,
          })
        } else {
          check.push({
            id: this.state.programme[program - 1].case_checked[i].id,
            label: this.state.programme[program - 1].case_checked[i].label,
            checked: false,
          })
        }
      } else {
        check.push({
          id: this.state.programme[program - 1].case_checked[i].id,
          label: this.state.programme[program - 1].case_checked[i].label,
          checked: this.state.programme[program - 1].case_checked[i].checked,
        })
      }
    }

    for (let i = 0; i < this.state.programme.length; i++) {
      if (i === program - 1) {
        list_data.push({
          id: this.state.programme[i].id,
          label: this.state.programme[i].label,
          show: this.state.programme[i].show,
          case_checked: check,
          notification: this.state.programme[i].notification,
        })
      } else {
        list_data.push({
          id: this.state.programme[i].id,
          label: this.state.programme[i].label,
          show: this.state.programme[i].show,
          case_checked: this.state.programme[i].case_checked,
          notification: this.state.programme[i].notification,
        })
      }
    }
    this.setState({ programme: list_data })
  }

  notif(id, stats) {
    let list_data = []
    for (let i in this.state.programme) {
      list_data.push({
        id: this.state.programme[i].id,
        label: this.state.programme[i].label,
        show: this.state.programme[i].show,
        case_checked: this.state.programme[i].case_checked,
        notification: this.state.programme[i].notification,
      })
    }
    if (stats) {
      list_data[id - 1].notification++
    } else {
      if (list_data[id - 1].notification !== 0) {
        list_data[id - 1].notification--
      }
    }

    this.setState({ programme: list_data })
  }
  Back() {
    let list_data = []
    for (let i in this.state.programme) {
      list_data.push({
        id: this.state.programme[i].id,
        label: this.state.programme[i].label,
        show: false,
        case_checked: this.state.programme[i].case_checked,
        notification: this.state.programme[i].notification,
      })
    }

    this.setState({ programme: list_data })
    this.setState({ show_list: false })
  }

  Delete(status) {
    if (status) {
      let list_data = []
      for (let i in this.state.programme) {
        if (!this.state.programme[i].show) {
          list_data.push({
            id: i,
            label: this.state.programme[i].label,
            show: this.state.programme[i].show,
            case_checked: this.state.programme[i].case_checked,
            notification: this.state.programme[i].notification,
          })
        }
      }
      this.setState({ programme: list_data })
      this.setState({ Modalvisible: false })
    } else {
      this.setState({ Modalvisible: false })
    }
  }

  list_programme() {
    return (
      <View style={style_programme.container}>
        <View style={style_programme.border_list}></View>
        {!this.state.show_list ? (
          <View style={style_programme.border_title_2}>
            <Text style={style_programme.title_text}>Mes programme</Text>
            <Entypo
              style={style_programme.overflow_programme}
              name="dots-three-vertical"
              size={25}
              color="black"
            />
          </View>
        ) : (
          <View style={style_programme.placement_title_2}>
            <TouchableOpacity onPress={() => this.Back()}>
              <FontAwesome5 name="arrow-left" size={30} color="black" />
            </TouchableOpacity>
            <View style={style_programme.margin_title_2}></View>
            <TouchableOpacity onPress={() => this.setModalStatus()}>
              <MaterialCommunityIcons name="delete" size={30} color="black" />
            </TouchableOpacity>
          </View>
        )}

        <View style={style_programme.line_title} />
        <View style={style_programme.border_list}></View>

        <FlatList
          data={this.state.programme}
          style={style_programme.heigth_list}
          renderItem={({ item }) => (
            <View style={style_programme.margin_list}>
              {!item.show ? (
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.props.navigation.replace('Details Programmes', {
                      id: item.id,
                    })
                  }
                  onLongPress={() => this.update(item.id)}
                >
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
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.props.navigation.replace('Details Programmes', {
                      id: item.id,
                    })
                  }
                  onLongPress={() => this.update(item.id)}
                >
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
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )}
              {item.show ? (
                <View style={style_programme.color_border_down}>
                  <View style={style_programme.placement_text_down}>
                    <View style={style_programme.border_text_down}></View>
                    <Text style={style_programme.text_2_down}> Planning </Text>
                    <View style={style_programme.placement_checkbox}>
                      {this.state.days.map((cb) => {
                        return (
                          <CheckBox
                            key={cb.id}
                            style={style_programme.margin_checkbox}
                            checkedCheckBoxColor={'black'}
                            leftText={cb.label}
                            isChecked={item.case_checked[cb.id - 1].checked}
                            onClick={() => this.check_days(item.id, cb.id)}
                          />
                        )
                      })}
                    </View>
                    <View style={style_programme.placement_notification}>
                      <Text style={style_programme.text_notification}>
                        Notifications
                      </Text>
                      <View style={style_programme.border_increment_button}>
                        <Text
                          style={style_programme.border_compteur_notification}
                        >
                          {item.notification}
                        </Text>
                        <View style={style_programme.placement_compteur}>
                          <TouchableOpacity
                            onPress={() => this.notif(item.id, true)}
                          >
                            <AntDesign name="up" size={10} color="black" />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => this.notif(item.id, false)}
                          >
                            <AntDesign name="down" size={10} color="black" />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <Text> min avant</Text>
                    </View>
                    <View style={style_programme.placement_btn_validate}>
                      <TouchableOpacity>
                        <View style={style_programme.border_btn_valdate}>
                          <Text> VALIDER </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                <View></View>
              )}
              <View style={style_programme.espacement_programme}></View>
            </View>
          )}
        />
        <View style={style_programme.border_add}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('Programme Choix Muscle')
            }
          >
            <AntDesign name="pluscircleo" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={style_programme.border_menu}>
          <TabMenu />
        </View>
        {this.state.Modalvisible ? (
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
          >
            <View style={style_modal.container}>
              <View style={style_modal.placement_modal}></View>
              <View style={style_modal.border_modal}>
                <View style={style_modal.border_container}></View>
                <View style={style_modal.placement_title}>
                  <Text style={style_modal.size_title}>
                    {' '}
                    Voulez supprimer le(s) programme(s)
                  </Text>
                  <View style={style_modal.border_container}></View>
                  <View style={style_modal.placement_btn}>
                    <TouchableOpacity
                      style={style_modal.btn_validate}
                      onPress={() => this.Delete(true)}
                    >
                      <View style={style_modal.border_container_2}></View>
                      <Text style={style_modal.color_btn}>Oui</Text>
                    </TouchableOpacity>
                    <View style={style_modal.espacement_btn}></View>
                    <TouchableOpacity
                      style={style_modal.btn_not_validate}
                      onPress={() => this.Delete(false)}
                    >
                      <View style={style_modal.border_container_2}></View>
                      <Text style={style_modal.color_btn}>Non</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        ) : (
          <View></View>
        )}
      </View>
    )
  }

  render() {
    return !this.state.timePassed && this.props.router !== undefined
      ? this.loading()
      : this.list_programme()
  }
}
