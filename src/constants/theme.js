import { Dimensions, StyleSheet } from 'react-native';
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

  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
  },
  
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

});
