import CustomButton from '../components/CustomButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import useDatePicker from '../hooks/useDatePicker';

import {
  ScrollView,
  Text,
  TextInput,
  View,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../constants/theme';
import { useForm } from '../hooks/useForm';

const ConcursosScreen = () => {
  const { top } = useSafeAreaInsets();

  const {
    onChangeDate,
    showDatepicker,
    showModalDatePicker,
    showModalDatePickerIos,
    mode,
    date,
  } = useDatePicker();

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

  const localizedFormatWithoutTime = new Date(date).toLocaleDateString();

  return (
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

        {Platform.OS === 'android' && (
          <TouchableOpacity onPress={showDatepicker} activeOpacity={0.7}>
            <TextInput
              onChangeText={(value) => onChange(value, 'date')}
              value={localizedFormatWithoutTime}
              style={{
                ...globalStyles.input,
                color: 'black',
              }}
              placeholderTextColor='gray'
              editable={false}
            />
          </TouchableOpacity>
        )}

        {showModalDatePicker && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChangeDate}
          />
        )}

        {Platform.OS === 'ios' && (
          <View style={{ ...globalStyles.dataPickerContainer }}>
            <Button
              onPress={showDatepicker}
              title={'Fecha:' + localizedFormatWithoutTime}
              color='gray'
            />
            {showModalDatePickerIos && (
              <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChangeDate}
                display='inline'
              />
            )}
          </View>
        )}

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
    </ScrollView>
  );
};

export default ConcursosScreen;
