import React, { useState } from 'react';

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';

import CustomButton from '../components/CustomButton';

const PresentadoresScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [showError, setShowError] = useState('');

  const { onChange, onReset, statecurrent } = useForm({
    apeMat: '',
    apePat: '',
    clave: '',
    correo: '',
    direccion: '',
    empresa: '',
    especialidad: '',
    grado: '',
    nombre: '',
    telefono: '',
  });
  const {
    nombre,
    apePat,
    apeMat,
    correo,
    direccion,
    telefono,
    grado,
    empresa,
    especialidad,
    clave,
  } = statecurrent;

  const isValidFields = () => {
    if (
      telefono === '' ||
      nombre === '' ||
      grado === '' ||
      especialidad === '' ||
      empresa === '' ||
      direccion === '' ||
      correo === '' ||
      clave === '' ||
      apePat === '' ||
      apeMat === ''
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
            <Text
              style={{
                ...globalStyles.title,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Presentadores
            </Text>
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'nombre')}
              placeholder='Nombre'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={nombre}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'apePat')}
              placeholder='ApePat'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={apePat}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'apeMat')}
              placeholder='ApeMat'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={apeMat}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'correo')}
              placeholder='Correo'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={correo}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'direccion')}
              placeholder='Direccion'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={direccion}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'telefono')}
              placeholder='Telefono'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={telefono}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'grado')}
              placeholder='Grado'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={grado}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'empresa')}
              placeholder='Empresa'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={empresa}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'especialidad')}
              placeholder='Especialidad'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={especialidad}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'clave')}
              placeholder='Clave'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={clave}
              autoCapitalize='none'
              keyboardType='text'
            />
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

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TouchableOpacity
            disabled={!isValidFields()}
            onPress={() =>
              // onClickSignIn()
              console.log('hello world from my new comment')
            }
          >
            <CustomButton enable={!isValidFields()} text='Crear presentador' />
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default PresentadoresScreen;
