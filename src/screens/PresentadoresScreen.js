import React, { useState } from 'react';

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';

import CustomButton from '../components/CustomButton';
import Header from '../components/Header';

const PresentadoresScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [showError, setShowError] = useState('');

  const { onChange, onReset, statecurrent } = useForm({
    apeMat: '',
    apePat: '',
    clave: '',
    correo: '',
    direccion: '',
    empresa: '',
    especialidad: '',
    grado: '',
    nombre: '',
    telefono: '',
  });
  const {
    nombre,
    apePat,
    apeMat,
    correo,
    direccion,
    telefono,
    grado,
    empresa,
    especialidad,
    clave,
  } = statecurrent;

  const isValidFields = () => {
    if (
      telefono === '' ||
      nombre === '' ||
      grado === '' ||
      especialidad === '' ||
      empresa === '' ||
      direccion === '' ||
      correo === '' ||
      clave === '' ||
      apePat === '' ||
      apeMat === ''
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
            <Text style={globalStyles.h1}>Presentadores</Text>

            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'nombre')}
              placeholder="Nombre"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={nombre}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'apePat')}
              placeholder="ApePat"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={apePat}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'apeMat')}
              placeholder="ApeMat"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={apeMat}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'correo')}
              placeholder="Correo"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={correo}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'direccion')}
              placeholder="Direccion"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={direccion}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'telefono')}
              placeholder="Telefono"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={telefono}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'grado')}
              placeholder="Grado"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={grado}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'empresa')}
              placeholder="Empresa"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={empresa}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'especialidad')}
              placeholder="Especialidad"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={especialidad}
              autoCapitalize="none"
              keyboardType="text"
            />
            <TextInput
              style={{ ...globalStyles.input, color: 'black' }}
              onChangeText={(value) => onChange(value, 'clave')}
              placeholder="Clave"
              placeholderTextColor="gray"
              autoCorrect={false}
              value={clave}
              autoCapitalize="none"
              keyboardType="text"
            />

            <CustomButton enable={!isValidFields()} text="Crear presentador" />
          </View>

          <View style={{ height: 200 }} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PresentadoresScreen;
