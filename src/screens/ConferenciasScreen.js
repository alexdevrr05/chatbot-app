import React from 'react';

import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';

const ConferenciasScreen = () => {
  const { top } = useSafeAreaInsets();

  const {onChange, onReset, statecurrent} = useForm({
    area: '',
    clave: '',
    description: '',
    duration: '',
    status: '',
    date: '',
    zone: '',
    speaker: '',
    eveClave: '',
  });

  const {
    area,
    clave,
    description,
    duration,
    status,
    date,
    zone,
    speaker,
    eveClave,
  } = statecurrent;

  const isValidFields = () => {
    if (
      area === '' ||
      clave === '' ||
      description === '' |
      duration === '' ||
      status === '' ||
      date === '' ||
      zone === '' ||
      speaker === '' ||
      eveClave === ''
    ) return false;
    return true;
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={{ marginTop: top + 20, marginHorizontal: 20 }}>
              
              <Text style={globalStyles.h1}>Agregar conferencia</Text>

              <TextInput
                onChangeText={(value) => onChange(value, 'area')}
                value={area}      
                style={{...globalStyles.input}}
                placeholder='Area de la conferencia'
                placeholderTextColor='gray'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='text'
              />    
              
              <TextInput
                onChangeText={(value) => onChange(value, 'clave')}
                value={clave}      
                style={{...globalStyles.input}}
                placeholder='Clave de conferencia'
                placeholderTextColor='gray'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='text'
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
                onChangeText={(value) => onChange(value, 'duration')}
                value={duration}      
                style={{...globalStyles.input}}
                placeholder='Duración'
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
                onChangeText={(value) => onChange(value, 'date')}
                value={date}      
                style={{...globalStyles.input}}
                placeholder='Fecha de la conferencia'
                placeholderTextColor='gray'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='text'
              />     

              <TextInput
                onChangeText={(value) => onChange(value, 'zone')}
                value={zone}      
                style={{...globalStyles.input}}
                placeholder='Lugar'
                placeholderTextColor='gray'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='text'
              />
              
              <TextInput
                onChangeText={(value) => onChange(value, 'speaker')}
                value={speaker}      
                style={{...globalStyles.input}}
                placeholder='Ponente'
                placeholderTextColor='gray'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='text'
              />   

              <TextInput
                onChangeText={(value) => onChange(value, 'eveClave')}
                value={eveClave}      
                style={{...globalStyles.input}}
                placeholder='EveClave'
                placeholderTextColor='gray'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='text'
              />   

              <CustomButton enable={!isValidFields()} text='Agregar conferencia'/>
            </View>
          </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ConferenciasScreen;
