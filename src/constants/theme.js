import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../themes/appTheme';
const { width, height } = Dimensions.get('window');

export const SIZES = {
  width,
  height,
};

export const COLORS = {};

export const globalStyles = StyleSheet.create({
  globalMargin: {
    paddingHorizontal: 20,
  },

  globalBackground: {
    backgroundColor: 'white',
    flex: 1,
  },

  title: {
    fontSize: 22,
  },

  widgetCategory: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 65,
    height: 100,
    borderRadius: 30,
    marginRight: 20,
    // justifyContent: 'space-between',
  },

  shadow: {
    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,

    elevation: 3,
  },

  widgetText: {
    fontSize: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  subwidget: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 45,
    height: 45,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },

  imgPrueba: {
    width: 35,
    height: 35,
    marginBottom: 5,
  },

  // button: {
  //   backgroundColor: '#2196F3',
  //   padding: 15,
  //   borderRadius: 5,
  //   marginTop: 20,
  //   marginLeft: 20,
  //   marginRight: 20,
  // },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  buttonEnable: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },

  buttonDisable: {
    backgroundColor: '#B0C4DE',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },

  h1: {
    fontWeight: 'bold',
    fontSize: 26,
    marginVertical: 15,
  },

  input: {
    borderWidth: 1.5,
    borderColor: 'black',
    height: 'auto',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'white',
  },

  dropdown: {
    backgroundColor: 'white',
    height: 50,
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginVertical: 8,
  },

  dropdownPlaceholderStyle: {
    fontSize: 16,
    color: 'gray',
  },

  slider:{
    borderWidth: 1.5,
    borderColor: 'black',
    height: 'auto',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'white',
  },

  dataPickerContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderWidth: '.5px',
    borderColor: 'rgb(211, 211, 211)',
    borderRadius: 4,
    marginBottom: 4,
  },

  textInDates: {
    color: 'gray',
    position: 'absolute',
    zIndex: 999,
    paddingLeft: 15,
    top: 15,
    fontSize: 10,
  },

  textInDatesIos: {
    color: 'gray',
    position: 'absolute',
    zIndex: 999,
    right: 1,
    paddingRight: 10,
    top: 15,
    fontSize: 10,
  },

  sliderText: {
    color: 'gray'
  }
});
