import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  h2: {
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,

  },

  profilpicture: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  container1: {
    flex: 1,
    backgroundColor: 'white',
  },

  container2: {
    flex: 2.5,
    backgroundColor: 'white',
  },

  input_back: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 80,
    marginRight: 20,
    backgroundColor: 'transparent',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    width: 200,
  },

  input: {
    marginTop: 100,
  },

  input_text: {
    fontSize: 15,
  },

  border_container: {
    flex: 1,
    marginTop: 100,
  },

  button: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    height: 40,
    width: 170,
    marginRight: 80,
    marginLeft: 100,
    marginTop: 10,
    marginBottom: 10,
  },

  text_button: {
    color: 'black',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 10,
    fontSize: 15,
  },
})
