import layout from '../constants/Layout'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 3.5,
    flexDirection: 'row',
  },
  icons: {
    alignItems: 'center',
  },
  button_icons: {
    width: layout.window.width / 4,
    borderColor: 'black',
    borderWidth: 1,
  },
})
