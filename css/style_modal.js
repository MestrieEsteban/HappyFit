import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  placement_modal: {
    flex: 0.3,
  },
  border_modal: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.0,
    elevation: 1,
    width: 400,
    height: 200,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  border_container: {
    flex: 1,
  },
  border_container_2: {
    flex: 0.5
  },
  placement_title: {
    flex: 2.5,
    alignItems: 'center',
  },
  size_title: {
    fontSize: 20,
  },
  placement_btn: {
    flex: 2,
    flexDirection: 'row',
  },
  color_btn: {
    fontSize: 17,
    color: 'white',
  },
  btn_validate:{
    borderColor: '#04B404',
    borderWidth: 1,
    backgroundColor: '#04B404',
    height: 40,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#04B404',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.0,
    elevation: 1,
  },
  btn_not_validate:
      {
        borderColor: '#FE2E2E',
        borderWidth: 1,
        backgroundColor: '#FE2E2E',
        height: 40,
        width: 100,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#FE2E2E',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.0,
        elevation: 1,
      },
      espacement_btn:{
        marginLeft: 50
      }
})
