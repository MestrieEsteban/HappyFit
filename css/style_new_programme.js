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
  border_title: {
    flex: 2.5,
  },
  title_text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heigth_list: {
    height: layout.window.height / 1.5,
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
  text_up: {
    color: 'white',
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
  espacement_liste: {
    marginTop: layout.window.height / 25,
  },
  border_arrow: {
    flex: 5,
  },
  border_check: {
    flex: 7,
    flexDirection: 'row',
  },
  espacement_arrow: {
    marginLeft: layout.window.width / 50,
  },
  espacement_check: {
    marginLeft: layout.window.width / 2,
  },
})
