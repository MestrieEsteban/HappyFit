import {StyleSheet} from 'react-native'

export default StyleSheet.create({ 

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    container2: {
        flex: 2,
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
        marginLeft: 40,
        marginRight: 40,
    },
    container3: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    texte:{
        fontFamily: "arial",
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input_back: {
        marginTop: 20,
        marginButtom: 20,
        marginLeft: 50,
        marginRigth: 20,
        backgroundColor: 'transparent',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        width: 200,
      },

      input_text: {
        fontSize: 20,
      },

      border_container:{
        flex: 1,
      },

      button:{
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        height: 40,
        width: 150,
        margin:50
      },

      text_button:{
        color: 'black',
        alignItems: 'center',
        marginLeft: 50,
        marginTop: 10,
        fontSize: 15,
      },

      alternativeLayoutButtonContainer: {
        marginTop: 0,
        marginButtom: 0,
        marginLeft: -40,
        marginRigth: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent:'stretch'
    },
})