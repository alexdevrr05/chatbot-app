import DatePicker from '../components/DatePicker';
import CustomButton from '../components/CustomButton';
import useDatePicker from '../hooks/useDatePicker';

import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';

const ConcursosScreen = () => {
  const { top } = useSafeAreaInsets();

  const { date } = useDatePicker();

  const { onChange, onReset, statecurrent } = useForm({
    conClave: '',
    description: '',
    duration: '',
    responsable: '',
    status: '',
    date: '',
    zone: '',
    eveClave: '',
  });

  const {
    conClave,
    description,
    duration,
    responsable,
    status,
    zone,
    eveClave,
  } = statecurrent;

  const isValidFields = () => {
    if (
      conClave === '' ||
      description === '' ||
      duration === '' ||
      responsable === '' ||
      status === '' ||
      date === '' ||
      zone === '' ||
      eveClave === ''
    )
      return false;
    return true;
  };

  const addContest = () => {
    console.log({
      date,
      conClave,
      description,
      duration,
      responsable,
      status,
      zone,
      eveClave,
    });

    onReset({
      conClave: '',
      description: '',
      duration: '',
      responsable: '',
      status: '',
      zone: '',
      eveClave: '',
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{ marginTop: top + 20, marginHorizontal: 20 }}>
            <Text style={globalStyles.h1}>Agregar concurso</Text>

            <TextInput
              onChangeText={(value) => onChange(value, 'conClave')}
              value={conClave}
              style={{ ...globalStyles.input, color: 'black' }}
              placeholder='conClave'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='numeric'
            />

            <TextInput
              onChangeText={(value) => onChange(value, 'description')}
              value={description}
              style={{ ...globalStyles.input, color: 'black' }}
              placeholder='descripción'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            <TextInput
              onChangeText={(value) => onChange(value, 'duration')}
              value={duration}
              style={{ ...globalStyles.input }}
              placeholder='duración'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='numeric'
            />

            <TextInput
              onChangeText={(value) => onChange(value, 'responsable')}
              value={responsable}
              style={{ ...globalStyles.input }}
              placeholder='Responsable'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            <TextInput
              onChangeText={(value) => onChange(value, 'status')}
              value={status}
              style={{ ...globalStyles.input }}
              placeholder='Status'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            {/* Campo de fecha */}
            <DatePicker />

            <TextInput
              onChangeText={(value) => onChange(value, 'zone')}
              value={zone}
              style={{ ...globalStyles.input }}
              placeholder='Lugar'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            <TextInput
              onChangeText={(value) => onChange(value, 'eveClave')}
              value={eveClave}
              style={{ ...globalStyles.input }}
              placeholder='EveClave'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='numeric'
            />

            <CustomButton
              enable={!isValidFields()}
              text='Agregar concurso'
              fields={statecurrent}
              handleOnPress={() => addContest()}
            />
          </View>

          <View style={{ height: 200 }} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ConcursosScreen;
