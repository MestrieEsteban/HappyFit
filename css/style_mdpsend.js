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

  appButton: {
    elevation: 8,
    backgroundColor: '#000000',
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },

  ButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  container1: {
    flex: 1,
    backgroundColor: 'white',
  },

  container2: {
    marginTop: 200,
    flex: 2,
    backgroundColor: 'white',
  },
  container3: {
    flex: 1,
    backgroundColor: 'white',
  },


  border_container: {
    flex: 1,
  },
  
  button: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    height: 40,
    width: 170,
    marginTop: 0,
    marginLeft: 100,
    marginButtom: 0,
    marginRight: 50,
  },

  text_button: {
    color: 'black',
    alignItems: 'center',
    marginLeft: 60,
    marginTop: 10,
    fontSize: 15,
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

  input_text: {
    fontSize: 15,
  },
})
