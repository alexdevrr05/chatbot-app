import React from 'react';
import { Text, TextInput, View } from 'react-native';
import CustomButtom from '../components/CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';

const ColaboradoresScreen = () => {
  const { top } = useSafeAreaInsets();


  const [onChange, onReset, statecurrent] = useForm({
    description: 'description',
    duration: 'duration'
  });

  const {description, duration} = statecurrent;

  const isValidFields = () => {
    if (
      description === '' ||
      duration === ''
    ) return false;
    return true;
  }


  return (
    <View style={{ marginTop: top + 20 }}>
      <Text>Agregar concurso</Text>
      <TextInput
        onChangeText={(value) => onChange(value, 'description')}
        value={description}
        style={{...globalStyles.input, color: 'black' }}
        placeholder='description'
        placeholderTextColor='gray'
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType='text'
      />

      <TextInput
        onChangeText={(value) => onChange(value, 'duration')}
        value={duration}      
        style={{...globalStyles.input}}
        placeholder='duration'
        placeholderTextColor='gray'
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType='text'
      />            

      <CustomButtom enable={isValidFields()} text='Agregar concurso'/>
    </View>
  );
};

export default ColaboradoresScreen;
