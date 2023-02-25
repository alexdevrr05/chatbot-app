import React from 'react';

import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm } from '../hooks/useForm';
import { globalStyles } from '../constants/theme';
import CustomButton from '../components/CustomButton';

const EspaciosAsignadosScreen = () => {
  const { top } = useSafeAreaInsets();

  const {onChange, onReset, statecurrent} = useForm({
    area: '',
    description: '',
    equipment: ''
  });

  const {
    clave,
    description,
    equipment
  } = statecurrent;


  const isValidFields = () => {
    if (
      clave === '' ||
      description === '' ||
      equipment === ''   
    ) return false;
    return true;
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ marginTop: top + 20, marginHorizontal: 20 }}>
              
              <Text style={globalStyles.h1}> Espacios asignados</Text>
              
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
                placeholder='Descripción'
                placeholderTextColor='gray'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='text'
              />    

              <TextInput
                onChangeText={(value) => onChange(value, 'equipment')}
                value={equipment}      
                style={{...globalStyles.input}}
                placeholder='Equipo reservado'
                placeholderTextColor='gray'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='text'
              /> 

              <CustomButton enable={!isValidFields()} text='Asignar espacio'/>
            </View>
          </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EspaciosAsignadosScreen;
