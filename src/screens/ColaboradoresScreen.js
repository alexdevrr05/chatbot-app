import React from 'react';
import {
  // Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { globalStyles, SIZES } from '../constants/theme';
import { useForm } from '../hooks/useForm';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors } from '../themes/appTheme';

const ColaboradoresScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  // const dispatch = useDispatch();
  const [showError, setShowError] = useState('');
  const { onChange, onReset, statecurrent } = useForm({
    // nombre: '',
    // apellidoP: '',
    // apellidoM: '',
    // nomina: '',
    // rol1: '',

    nombre: 'José Martín',
    apellidoP: 'Villalobos',
    apellidoM: 'Salmeron',
    nomina: '450',
    rol1: 'Coordinador',
  });
  const { rol1, nomina, apellidoM, apellidoP, nombre } = statecurrent;

  const onClickSignIn = async (rol1, nomina, apellidoM, apellidoP, nombre) => {
    rol1.trim();
    nomina.trim();
    apellidoM.trim();
    apellidoP.trim();
    nombre.trim();

    console.log(nombre, nombre, apellidoP, apellidoM, nomina, rol1);
    try {
      // const resp = await axios.post(`http://10.0.2.2:5000/api/auth/login`, {
      //   rol1,
      //   nomina,
      //   apellidoM,
      //   apellidoP,
      //   nombre,
      // });

      // const data = resp.data;

      // if (data) {
      //   dispatch(loginAction(email, data.usuario.nombre, data.usuario.rol));
      //   onReset({
      //     rol1: '',
      //     nomina: '',
      //     apellidoM: '',
      //     apellidoP: '',
      //     nombre: '',
      //   });
      //   navigation.navigate('SlideScreen');
      // }
      navigation.navigate('EventosScreen');
    } catch (error) {
      console.log(error);
      // setShowError(error.response.data.msg);
    }
  };

  const isValidFields = () => {
    if (
      rol1 === '' ||
      nomina === '' ||
      apellidoM === '' ||
      apellidoP === '' ||
      nombre === ''
    )
      return false;
    return true;
  };

  return (
    <View
      style={{
        ...globalStyles.globalBackground,
        ...globalStyles.globalMargin,
        marginTop: top + 20,
      }}
    >
      {/* Es un componente que resuelve el problema común de 
      las vistas que necesitan moverse fuera del camino del teclado virtual. 
      Puede ajustar automáticamente su altura, 
      posición o relleno inferior en función de la altura del teclado. */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* OnFocus input */}
          <View
            style={{
              ...globalStyles.globalMargin,
              backgroundColor: 'white',
              justifyContent: 'center',
              paddingTop: 5,
            }}
          >
            {/* name apellidoP apellidoM nomina rol1 */}
            <Text
              style={{
                ...globalStyles.title,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Colaboradores
            </Text>
            <TextInput
              style={{ ...styles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'nombre')}
              placeholder='Nombre'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={nombre}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...styles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'apellidoP')}
              placeholder='Apellido paterno'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={apellidoP}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...styles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'apellidoM')}
              placeholder='Apellido materno'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={apellidoM}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...styles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'nomina')}
              placeholder='Nomina'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={nomina}
              autoCapitalize='none'
              keyboardType='numeric'
            />
            <TextInput
              style={{ ...styles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'rol1')}
              placeholder='Rol'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={rol1}
              autoCapitalize='none'
              keyboardType='text'
            />

            {/* <TextInput
              style={{ ...styles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'password')}
              placeholder='Password'
              value={password}
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              // It used so that the password is not displayed
              secureTextEntry={true}
            /> */}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* Contenedor forgot pass & signIn button */}
      <View
        style={{
          ...globalStyles.globalMargin,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'red' }}>{showError !== '' && showError}</Text>

        {/* <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity> */}

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TouchableOpacity
            // disabled={nombre === '' || apellidoP === ''}
            disabled={!isValidFields()}
            style={
              !isValidFields() ? styles.btnSignInDisabled : styles.btnSignIn
            }
            onPress={() =>
              onClickSignIn(nombre, apellidoP, apellidoM, nomina, rol1)
            }
          >
            {/* onPress={() => navigation.navigate('SlideScreen')}> */}
            <Text style={styles.textSignIn}>Sign In</Text>
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',

    height: SIZES.height / 3,
    backgroundColor: 'white',
  },

  icon: {
    width: 130,
    height: 70,
  },

  encabezado: {
    color: '#FFB143',
    fontWeight: 'bold',
    // fontSize: scale(25),
  },

  input: {
    borderWidth: 1.5,
    borderColor: colors.blueDark,
    height: 'auto',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'white',
  },

  forgotPassword: {
    color: 'rgba(0, 0, 0, .70)',
    opacity: 1,
  },

  btnSignIn: {
    backgroundColor: colors.primaryColor,
    width: '100%',
    // marginTop: 30,
    padding: 12,
    borderRadius: 10,
  },

  btnSignInDisabled: {
    backgroundColor: colors.primaryColor,
    opacity: 0.5,
    width: '100%',
    // marginTop: 30,
    padding: 12,
    borderRadius: 10,
  },

  textSignIn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
  },

  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  icons: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default ColaboradoresScreen;
