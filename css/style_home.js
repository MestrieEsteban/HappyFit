import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  view_image: {
    flex: 1,
    alignItems: 'center',
  },
  image1: {
    width: 350,
    height: 350,
  },
  placement_text: {
    flex: 0.5,
    alignItems: 'center',
  },
  border_container: {
    flex: 0.1,
  },
  view_button: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    width: 150,
    height: 50,
  },
  placement_btn_text: {
    marginTop: 10,
  },
  placement_button: {
    alignItems: 'center',
  },
})
