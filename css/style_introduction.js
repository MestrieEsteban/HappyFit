import layout from '../constants/Layout'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  slide_container: {
    width: layout.window.width,
    height: layout.window.height,
  },
  border_container: {
    flex: 1,
  },
  border_container_other: {
    flex: 2,
  },
  border_image: {
    flex: 2,
  },
  border_image_2: {
    flex: 5,
  },
  espacement_text_2: {
    flex: 3,
  },
  border_color_text_1: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    width: 350,
    height: 190,
    backgroundColor: '#E6E6E6',
  },
  border_color_text_2: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    width: 350,
    height: 280,
    backgroundColor: '#E6E6E6',
  },
  border_color_text_3: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    width: 350,
    height: 190,
    backgroundColor: '#E6E6E6',
  },
  view_border_text_1: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignement_view: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'column',
  },
  alignement_text_2: {
    flex: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
  espacement_image: {
    marginLeft: 20,
  },
  aligment_image_global: {
    flex: 0.5,
    flexDirection: 'row',
  },
  alignement_image_2: {
    flex: 0.8,
    flexDirection: 'row',
  },
  alignement_image_3: {
    flex: 0.3,
    flexDirection: 'row',
  },
  image_robot: {
    height: 250,
    width: 350,
  },
  image_muscle: {
    height: 280,
    width: 350,
  },
  image_healty: {
    height: 220,
    width: 350,
  },
  taille_text: {
    fontSize: 17,
  },
})
