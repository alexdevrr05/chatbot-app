import CustomButton from '../components/CustomButton';
import CustomDropdown from '../components/Dropdown';
import CustomSlider from '../components/Slider';
import DatePicker from '../components/DatePicker';

import {
  View,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../components/Header';

const listConferenceSites = [
  { label: 'Audiovisual', value: 1 },
  { label: 'Edificio E', value: 2 },
  { label: 'Explanada A', value: 3 },
  { label: 'Explanada B', value: 4 },
  { label: 'Jardines B', value: 5 },
];

const listSpeakers = [
  { label: 'Martin Villalobos', value: 1 },
  { label: 'Eduardo Estrada', value: 2 },
  { label: 'Alex Ramirez', value: 3 },
  { label: 'Ismael Romero', value: 4 },
  { label: 'Pendiente', value: 5 },
];

const listStatus = [
  { label: 'Activo', value: 1 },
  { label: 'En proceso', value: 2 },
  { label: 'Inactivo', value: 3 },
  { label: 'Finalizado', value: 4 },
];
const ConferenciasScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  const { onChange, onReset, statecurrent } = useForm({
    area: '',
    clave: '',
    description: '',
    duration: '',
    status: '',
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
    zone,
    speaker,
    eveClave,
  } = statecurrent;

  const isValidFields = () => {
    if (
      area === '' ||
      clave === '' ||
      (description === '') | (duration === '') ||
      status === '' ||
      date === '' ||
      zone === '' ||
      speaker === '' ||
      eveClave === ''
    )
      return false;
    return true;
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{ paddingBottom: 40 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ marginTop: top + 20, marginHorizontal: 20 }}>
            <Header onPressLeft={() => navigation.goBack()} />
            <Text style={globalStyles.h1}>Agregar conferencia</Text>

            <TextInput
              onChangeText={(value) => onChange(value, 'area')}
              value={area}
              style={{ ...globalStyles.input }}
              placeholder='Area de la conferencia'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            <TextInput
              onChangeText={(value) => onChange(value, 'clave')}
              value={clave}
              style={{ ...globalStyles.input }}
              placeholder='Clave de conferencia'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            <TextInput
              onChangeText={(value) => onChange(value, 'description')}
              value={description}
              style={{ ...globalStyles.input }}
              placeholder='Descripción'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            {/*TODO> SLIDER*/}
            <CustomSlider
              Label='Duración'
              value='Minutos'
              minimumValue={0}
              maximumValue={180}
              OnChange={onChange}
              TagChange='duration'
            />


            <CustomDropdown
              Placeholder='Status de la conferencia'
              Data={listStatus}
              OnChange={onChange}
              TagChange='status'
            />

            {/* Campo de fecha */}
            <DatePicker />

            <CustomDropdown
              Placeholder='Lugar de la conferencia'
              Data={listConferenceSites}
              OnChange={onChange}
              TagChange='zone'
            />

            <CustomDropdown
              Placeholder='Ponente'
              Data={listSpeakers}
              OnChange={onChange}
              TagChange='speaker'
            />

            <TextInput
              onChangeText={(value) => onChange(value, 'eveClave')}
              value={eveClave}
              style={{ ...globalStyles.input }}
              placeholder='EveClave'
              placeholderTextColor='gray'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='text'
            />

            <CustomButton
              enable={!isValidFields()}
              text='Agregar conferencia'
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ConferenciasScreen;