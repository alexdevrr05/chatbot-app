import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CustomButton from '../components/CustomButton';
import CustomDropdown from '../components/Dropdown';
import DatePicker from '../components/DatePicker';
import useDatePicker from '../hooks/useDatePicker';

const listStatus = [
  { label: 'Activo', value: 1 },
  { label: 'En proceso', value: 2 },
  { label: 'Inactivo', value: 3 },
  { label: 'Finalizado', value: 4 },
];

const EventosScreen = () => {
  const { top } = useSafeAreaInsets();

  const { date } = useDatePicker();

  const { onChange, onReset, statecurrent } = useForm({
    clave: '',
    description: '',
    status: '',
    date: '',
  });

  const { clave, description, status } = statecurrent;

  const isValidFields = () => {
    if (
      clave === '' ||
      description === '' ||
      status === '' ||
      date === ''
      // dateEnd === ''
    )
      return false;
    return true;
  };

  const addEvent = () => {
    console.log({
      date,
      // dateEnd,
      status,
      description,
      clave,
    });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback>
          <View style={{ marginTop: top + 20, marginHorizontal: 20 }}>
            <Text style={globalStyles.h1}> Eventos </Text>

            <TextInput
              onChangeText={(value) => onChange(value, 'clave')}
              value={clave}
              style={{ ...globalStyles.input }}
              placeholder='Clave'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='numeric'
            />

            <TextInput
              onChangeText={(value) => onChange(value, 'description')}
              value={description}
              style={{ ...globalStyles.input }}
              placeholder='Descriptión'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            <CustomDropdown
              Placeholder='Status'
              Data={listStatus}
              OnChange={onChange}
              TagChange='status'
            />

            {/* Campo de fecha */}
            <DatePicker />

            {/* Campo de fecha fin */}
            <DatePicker isEndDate={true} />

            {/* <TextInput
              onChangeText={(value) => onChange(value, 'dateEnd')}
              value={dateEnd}
              style={{ ...globalStyles.input }}
              placeholder='Fecha de finalización'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            /> */}

            <CustomButton
              enable={!isValidFields()}
              text='Crear evento'
              handleOnPress={() => addEvent()}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EventosScreen;
