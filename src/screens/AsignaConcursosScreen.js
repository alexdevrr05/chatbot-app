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

const AsignaConcursosScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [showError, setShowError] = useState('');

  const { onChange, onReset, statecurrent } = useForm({
    asesor: '',
    clave: '',
    concursoId: '',
    participanteId: '',
    rol: '',
  });
  const { rol, participanteId, concursoId, clave, asesor } = statecurrent;

  const isValidFields = () => {
    if (
      asesor === '' ||
      clave === '' ||
      concursoId === '' ||
      participanteId === '' ||
      rol === ''
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
              Asignación de concursos
            </Text>
            <CustomDropdown
              Placeholder='Asesor'
              Data={listAsesores}
              OnChange={onChange}
              TagChange='asesor'
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
            <CustomDropdown
              Placeholder='Concurso'
              Data={listConcurso}
              OnChange={onChange}
              TagChange='concurso'
            />
            <CustomDropdown
              Placeholder='ParticipanteId'
              Data={listParticipanteId}
              OnChange={onChange}
              TagChange='participanteId'
            />
            <CustomDropdown
              Placeholder='Rol'
              Data={listRoles}
              OnChange={onChange}
              TagChange='rol1'
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
            <CustomButton enable={!isValidFields()} text='Asignar concurso' />
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AsignaConcursosScreen;