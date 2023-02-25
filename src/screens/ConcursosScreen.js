import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';

const ConcursosScreen = () => {
  const { top } = useSafeAreaInsets();


  const {onChange, onReset, statecurrent} = useForm({
    conClave: '',
    description: '',
    duration: '',
    responsible: '',
    status: '',
    date: '',
    zone: '',
    eveClave: ''
  });

  const {
    conClave,
    description,
    duration,
    responsible,
    status,
    date,
    zone,
    eveClave

  } = statecurrent;

  const isValidFields = () => {
    if (
      conClave === '' ||
      description === '' ||
      duration === '' ||
      responsible === '' ||
      status === '' ||
      date === '' ||
      zone === '' ||
      eveClave === ''    
    ) return false;
    return true;
  }


  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, marginHorizontal: 20 }}>
        <Text style={globalStyles.h1}>Agregar concurso</Text>

        <TextInput
          onChangeText={(value) => onChange(value, 'conClave')}
          value={conClave}
          style={{...globalStyles.input, color: 'black' }}
          placeholder='conClave'
          placeholderTextColor='gray'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='numeric'
        />

        <TextInput
          onChangeText={(value) => onChange(value, 'description')}
          value={description}
          style={{...globalStyles.input, color: 'black' }}
          placeholder='descripción'
          placeholderTextColor='gray'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='text'
        />

        <TextInput
          onChangeText={(value) => onChange(value, 'duration')}
          value={duration}      
          style={{...globalStyles.input}}
          placeholder='duración'
          placeholderTextColor='gray'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='numeric'
        />         
             
        <TextInput
          onChangeText={(value) => onChange(value, 'responsible')}
          value={responsible}      
          style={{...globalStyles.input}}
          placeholder='Responsable'
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
          placeholder='Fecha'
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
          onChangeText={(value) => onChange(value, 'eveClave')}
          value={eveClave}      
          style={{...globalStyles.input}}
          placeholder='EveClave'
          placeholderTextColor='gray'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='numeric'
        />     

        <CustomButton enable={!isValidFields()} text='Agregar concurso'/>
      </View>
    </ScrollView>
  );
};

export default ConcursosScreen;
