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

const AsignaTallConfScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [showError, setShowError] = useState('');

  const { onChange, onReset, statecurrent } = useForm({
    clave: '',
    colaboradorId: '',
    conferenciaId: '',
    lugar: '',
    presentadorId: '',
  });
  const { clave, colaboradorId, conferenciaId, lugar, presentadorId } =
    statecurrent;

  const isValidFields = () => {
    if (
      clave === '' ||
      colaboradorId === '' ||
      conferenciaId === '' ||
      lugar === '' ||
      presentadorId === ''
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
              Asignación de talleres de conferencias
            </Text>
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
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'colaboradorId')}
              placeholder='ColaboradorId'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={colaboradorId}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'conferenciaId')}
              placeholder='ConferenciaId'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={conferenciaId}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'lugar')}
              placeholder='Lugar'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={lugar}
              autoCapitalize='none'
              keyboardType='text'
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'presentadorId')}
              placeholder='PresentadorId'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={presentadorId}
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
              console.log('Asignar concurso comment')
            }
          >
            <CustomButton
              enable={!isValidFields()}
              text='Asignar taller de conferencias'
            />
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AsignaTallConfScreen;
