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
import Header from '../components/Header';

const UsuariosScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [showError, setShowError] = useState('');

  const { onChange, onReset, statecurrent } = useForm({
    nombre: '',
    correo: '', // true or false
    estado: '',
    telefono: '',
    tipo: '', //admin
  });
  const { tipo, telefono, estado, correo, nombre } = statecurrent;

  const isValidFields = () => {
    if (
      tipo === '' ||
      telefono === '' ||
      estado === '' ||
      correo === '' ||
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
            <Header onPressLeft={() => navigation.goBack()} />
            <Text
              style={{
                ...globalStyles.title,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Usuarios
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
              onChangeText={(value) => onChange(value, 'estado')}
              placeholder='Estado'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={estado}
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
              onChangeText={(value) => onChange(value, 'tipo')}
              placeholder='Tipo'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={tipo}
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
            <CustomButton enable={!isValidFields()} text='Crear usuario' />
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default UsuariosScreen;
