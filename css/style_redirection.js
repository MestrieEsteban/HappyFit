import { StyleSheet } from 'react-native'
import layout from '../constants/Layout'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "white",
  },

  border_logo: {
    flex: 10,
    backgroundColor: "white",
  },

  text_logo: {
    textAlign: 'center',
  },

  border_name: {
    flex: 1,
    backgroundColor: "white",
  },

  text_name: {
    textAlign: 'center',
    marginBottom: layout.window.width /1.5,
    fontSize: 20,
    backgroundColor: "white",
    
  },

  logo: {
    width: 400, 
    height: 400,
    alignItems: "center"
  }
})
