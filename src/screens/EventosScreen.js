import React from 'react';

import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';

const EventosScreen = () => {
  
  const { top } = useSafeAreaInsets();

  const {onChange, onReset, statecurrent} = useForm({
    clave: '',
    description: '',
    status: '',
    dateStart: '',
    dateEnd: ''
  });

  const {
    clave,
    description,
    status,
    dateStart,
    dateEnd
  } = statecurrent;

  const isValidFields = () => {
    if (
      clave === '' ||
      description === '' ||
      status === '' ||
      dateStart === '' ||   
      dateEnd === ''
    ) return false;
    return true;
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback>
          <View style={{ marginTop: top + 20, marginHorizontal: 20 }}>
            
            <Text style={globalStyles.h1}> Eventos </Text>
            
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
              onChangeText={(value) => onChange(value, 'description')}
              value={description}      
              style={{...globalStyles.input}}
              placeholder='Descriptión'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            <TextInput 
              onChangeText={(value) => onChange(value, 'status')}
              value={status}      
              style={{...globalStyles.input}}
              placeholder='Status'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            <TextInput 
              onChangeText={(value) => onChange(value, 'dateStart')}
              value={dateStart}      
              style={{...globalStyles.input}}
              placeholder='Fecha de inicio'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            <TextInput 
              onChangeText={(value) => onChange(value, 'dateEnd')}
              value={dateEnd}
              style={{...globalStyles.input}}
              placeholder='Fecha de finalización'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />
            <CustomButton enable={!isValidFields()} text='Crear evento'/>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EventosScreen;
