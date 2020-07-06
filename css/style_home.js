import {StyleSheet} from 'react-native'

export default StyleSheet.create({ 

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    image:{
      width: 400,
      height: 400,
      alignItems: "center"
    },



    profilpicture:{
        alignItems: 'center',
        marginTop : 10,
        marginBottom: 10,
    },


      container1:{
        flex: 2.5,
        backgroundColor: "white",
      },

      container2:{
          flex: 1.5,
          backgroundColor: "white",
      },

      container3:{
        flex: 0,
        backgroundColor: "white",
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
            marginRight:80,
            marginLeft:100,
            marginTop:10,
            marginBottom:10
          },
        
          text_button: {
            color: 'black',
            alignItems: 'center',
            marginLeft: 40,
            marginTop: 10,
            fontSize: 15,
          },
          

})
