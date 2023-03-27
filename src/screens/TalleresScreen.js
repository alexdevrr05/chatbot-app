import React, { useState } from 'react';

import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  SliderBase,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';

import CustomButton from '../components/CustomButton';
import CustomSlider from '../components/Slider';
import DatePicker from '../components/DatePicker';
import useDatePicker from '../hooks/useDatePicker';
import Header from '../components/Header';

const TalleresScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [showError, setShowError] = useState('');

  const { showTimepicker } = useDatePicker();

  const { onChange, onReset, statecurrent } = useForm({
    talNombre: '',
    eveClave: '',
    talClave: '',
    talCupo: '',
    talDias: '',
    talStatus: '',
    talFechaInico: '',
    talFechaFin: '',
  });
  const { talNombre, eveClave, talClave, talCupo, talDias, talStatus } =
    statecurrent;

  const isValidFields = () => {
    if (
      talNombre === '' ||
      eveClave === '' ||
      talClave === '' ||
      talCupo === '' ||
      talDias === '' ||
      talStatus === ''
    )
      return false;
    return true;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{ marginTop: top + 20, marginHorizontal: 20 }}>
          <Header onPressLeft={() => navigation.goBack()} />
            <Text style={globalStyles.h1}>Talleres</Text>
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talNombre')}
              placeholder="Nombre"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={talNombre}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'eveClave')}
              placeholder="Clave"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={eveClave}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talClave')}
              placeholder="Clave"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={talClave}
              autoCapitalize="none"
              keyboardType="text"
            />
            <CustomSlider
              Label='Cupos'
              value='Cupos'
              minimumValue={5}
              maximumValue={100}
              OnChange={onChange}
              TagChange='talCupo'
            />

            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talDias')}
              placeholder="Dias"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={talDias}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'talStatus')}
              placeholder="Status"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={talStatus}
              autoCapitalize="none"
              keyboardType="text"
            />

            {/* Campo de fecha */}
            <DatePicker />

            {/* Campo de fecha fin */}
            <DatePicker isEndDate={true} />

            <DatePicker modeDatePicker={'time'} />

            <CustomButton enable={!isValidFields()} text="Crear taller" />
          </View>

          <View style={{ height: 200 }} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TalleresScreen;