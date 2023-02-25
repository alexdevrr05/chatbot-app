import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import { useForm } from '../hooks/useForm';
import { globalStyles } from '../constants/theme';
import CustomButton from '../components/CustomButton';

const ParticipantesScreen = () => {
  const { top } = useSafeAreaInsets();

  const { onChange, onReset, statecurrent } = useForm({
    clave: '',
    eveClave: '',
    ncontrol: '',
    fullName: '',
    paternalSurname: '',
    mothersSurname: '',
    email: '',
    phone: '',
    address: '',
    picture: '',
    career: '',
    grade: '',
  })

  const {
    clave,
    eveClave,
    ncontrol,
    fullName,
    paternalSurname,
    mothersSurname,
    email,
    phone,
    address,
    picture,
    career,
    grade,
  } = statecurrent;

  const isValidFields = () => {
    if (
      clave === '' ||
      eveClave === '' ||
      ncontrol === '' ||
      fullName === '' ||
      paternalSurname === '' ||
      mothersSurname === '' ||
      email === '' ||
      phone === '' ||
      address === '' ||
      picture === '' ||
      career === '' ||
      grade === ''
    ) return false;
    return true;
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{marginVertical: top + 20, marginHorizontal: 20 }}>
            
            <Text style={globalStyles.h1}> Nuevo participante </Text>

            <TextInput
                onChangeText={(value) => onChange(value, 'clave')}
                value={clave}      
                style={{...globalStyles.input}}
                placeholder='Clave'
                placeholderTextColor='gray'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='numeric'
              /> 

            <TextInput
              onChangeText={(value) => onChange(value, 'eveClave')}
              value={eveClave}      
              style={{...globalStyles.input}}
              placeholder='EveClave'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='numeric'
            /> 

            <TextInput
              onChangeText={(value) => onChange(value, 'ncontrol')}
              value={ncontrol}      
              style={{...globalStyles.input}}
              placeholder='Numero de control'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='numeric'
            /> 

            <TextInput
              onChangeText={(value) => onChange(value, 'fullName')}
              value={fullName}      
              style={{...globalStyles.input}}
              placeholder='Nombre del participante'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            /> 

            <TextInput
              onChangeText={(value) => onChange(value, 'paternalSurname')}
              value={paternalSurname}      
              style={{...globalStyles.input}}
              placeholder='Apellido paterno'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            /> 

            <TextInput
              onChangeText={(value) => onChange(value, 'mothersSurname')}
              value={mothersSurname}      
              style={{...globalStyles.input}}
              placeholder='Apellido materno'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />             

            <TextInput
              onChangeText={(value) => onChange(value, 'email')}
              value={email}      
              style={{...globalStyles.input}}
              placeholder='Correo electronico'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />  

            <TextInput
              onChangeText={(value) => onChange(value, 'phone')}
              value={phone}      
              style={{...globalStyles.input}}
              placeholder='Telefono'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='numeric'
            /> 

            <TextInput
              onChangeText={(value) => onChange(value, 'address')}
              value={address}      
              style={{...globalStyles.input}}
              placeholder='Dirección'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            /> 

            <TextInput
              onChangeText={(value) => onChange(value, 'picture')}
              value={picture}      
              style={{...globalStyles.input}}
              placeholder='Foto'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            /> 

            <TextInput
              onChangeText={(value) => onChange(value, 'grade')}
              value={grade}      
              style={{...globalStyles.input}}
              placeholder='Semestre'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='numeric'
            /> 

            <TextInput
              onChangeText={(value) => onChange(value, 'career')}
              value={career}      
              style={{...globalStyles.input}}
              placeholder='Carrera'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            /> 

            <CustomButton enable={!isValidFields()} text='Añadir nuevo participante'/>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ParticipantesScreen;
