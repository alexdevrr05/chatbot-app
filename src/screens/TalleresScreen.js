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

const TalleresScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [showError, setShowError] = useState('');

  const { onChange, onReset, statecurrent } = useForm({
    talNombre: '',
    eveClave: '',
    talClave: '',
    talCupo: '',
    talDias: '',
    talStatus: '',
    talFechaInico: '',
    talFechaFin: '',
    talHorario: '',
  });
  const {
    talNombre,
    eveClave,
    talClave,
    talCupo,
    talDias,
    talStatus,
    talFechaInico,
    talFechaFin,
    talHorario,
  } = statecurrent;

  const isValidFields = () => {
    if (
      talNombre === '' ||
      eveClave === '' ||
      talClave === '' ||
      talCupo === '' ||
      talDias === '' ||
      talStatus === '' ||
      talFechaInico === '' ||
      talFechaFin === '' ||
      talHorario === ''
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
              Talleres
            </Text>
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talNombre')}
              placeholder='Nombre'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={talNombre}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'eveClave')}
              placeholder='Clave'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={eveClave}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talClave')}
              placeholder='Clave'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={talClave}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talCupo')}
              placeholder='Cupo'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={talCupo}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talDias')}
              placeholder='Dias'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={talDias}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talStatus')}
              placeholder='Status'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={talStatus}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talFechaInico')}
              placeholder='FechaInico'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={talFechaInico}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talFechaFin')}
              placeholder='FechaFin'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={talFechaFin}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talHorario')}
              placeholder='Horario'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={talHorario}
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
              console.log('hello world from Talleres ')
            }
          >
            <CustomButton enable={!isValidFields()} text='Crear taller' />
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default TalleresScreen;
