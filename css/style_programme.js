import { StyleSheet } from 'react-native'
import layout from '../constants/Layout'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  border_container: {
    flex: 2,
  },
  overflow_programme: {
    marginLeft: 20,
  },
  placement_title_2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  margin_title_2: {
    marginLeft: layout.window.line - 80,
  },
  border_list: {
    flex: 1.5,
  },
  border_title: {
    flex: 2.5,
  },
  border_title_2: {
    flex: 1.5,
    flexDirection: 'row',
  },
  title_text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  line_title: {
    backgroundColor: 'black',
    height: 1,
    width: layout.window.line,
  },
  heigth_list: {
    height: layout.window.height / 1.5,
  },
  margin_list: {
    marginLeft: 10,
  },
  option_programme_hidden: {
    borderColor: '#3598DA',
    borderWidth: 1,
    backgroundColor: '#3598DA',
    width: layout.window.line - 20,
    height: 60,
  },
  option_programme_show: {
    borderColor: '#0000cc',
    borderWidth: 1,
    backgroundColor: '#0000cc',
    width: layout.window.line - 20,
    height: 60,
  },
  border_up: {
    borderWidth: 1,
    borderColor: '#3598DA',
    backgroundColor: '#3598DA',
    width: 200,
    height: 30,
  },
  border_text_up: {
    flex: 0.2,
  },

  placement_text_up: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  placement_programme: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  text_up: {
    color: 'white',
  },
  size_text_up: {
    fontSize: 20,
  },
  color_border_down: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    width: 400,
    height: 100,
  },
  border_down: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    width: 200,
    height: 110,
  },
  placement_text_down: {
    flex: 1,
    flexDirection: 'column',
  },
  border_text_down: {
    flex: 0.3,
  },
  text_down: {
    flex: 1,
  },
  text_2_down: {
    marginLeft: 3,
  },
  placement_checkbox: {
    flexDirection: 'row',
  },
  margin_checkbox: {
    flex: 0.12,
    marginLeft: 6,
  },
  placement_notification: {
    flex: 1,
    flexDirection: 'row',
  },
  text_notification: {
    marginLeft: 5,
    marginRight: 60,
  },
  border_increment_button: {
    flex: 0.27,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    height: 20,
  },
  border_compteur_notification: {
    marginLeft: 10,
  },
  placement_compteur: {
    flex: 0.5,
    flexDirection: 'column',
    marginLeft: 5,
  },
  placement_btn_validate: {
    flexDirection: 'row',
    marginLeft: layout.window.line / 1.4,
  },
  border_btn_valdate: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 65,
  },
  espacement_liste: {
    marginTop: layout.window.height / 25,
  },
  espacement_programme: {
    marginTop: layout.window.height / 60,
  },
  border_arrow: {
    flex: 5,
  },
  border_check: {
    flex: 7,
    flexDirection: 'row',
  },
  border_add: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: layout.window.line / 1.2,
  },
  border_menu: {
    flex: 2.5,
    flexDirection: 'row',
  },
  espacement_arrow: {
    marginLeft: layout.window.width / 50,
  },
  espacement_check: {
    marginLeft: layout.window.width / 2,
  },
})
