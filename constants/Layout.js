import { Dimensions } from 'react-native'
import Constants from 'expo-constants'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
let line

if (Constants.platform.ios || Constants.platform.android) {
  line = width
} else {
  line = width / 4
}

export default {
  window: {
    width,
    height,
    line,
  },
}
