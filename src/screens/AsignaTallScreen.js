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

const AsignaTallScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [showError, setShowError] = useState('');

  const { onChange, onReset, statecurrent } = useForm({
    clave: '',
    colaboradorId: '',
    participanteId: '',
    presentadorId: '',
    tallerId: '',
  });
  const { clave, colaboradorId, participanteId, presentadorId, tallerId } =
    statecurrent;

  const isValidFields = () => {
    if (
      clave === '' ||
      colaboradorId === '' ||
      participanteId === '' ||
      presentadorId === '' ||
      tallerId === ''
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
              Asignación de taller
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
              onChangeText={(value) => onChange(value, 'participanteId')}
              placeholder='ParticipanteId'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={participanteId}
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
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'tallerId')}
              placeholder='TallerId'
              placeholderTextColor='gray'
              autoCorrect={false}
              value={tallerId}
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
              console.log('Asignar taller comment')
            }
          >
            <CustomButton enable={!isValidFields()} text='Asignar taller' />
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AsignaTallScreen;
