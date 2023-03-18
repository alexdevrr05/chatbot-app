import DateTimePicker from '@react-native-community/datetimepicker';
import useDatePicker from '../hooks/useDatePicker';

import {
  Button,
  View,
  Platform,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import { globalStyles } from '../constants/theme';

const DatePicker = ({ isEndDate }) => {
  const {
    onChangeDate,
    showDatepicker,
    date,
    // dateEnd,
    localizedFormatWithoutTime,
    mode,
    showModalDatePicker,
    showModalDatePickerIos,
  } = useDatePicker();

  return (
    <View>
      {Platform.OS === 'android' && (
        <TouchableOpacity onPress={showDatepicker} activeOpacity={0.7}>
          {isEndDate ? (
            <Text
              style={{
                ...globalStyles.textInDates,
              }}
            >
              Fecha de finalización
            </Text>
          ) : (
            <Text
              style={{
                ...globalStyles.textInDates,
              }}
            >
              Fecha
            </Text>
          )}
          <TextInput
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
          {isEndDate ? (
            <Text
              style={{
                ...globalStyles.textInDatesIos,
              }}
            >
              Fecha de finalización
            </Text>
          ) : (
            <Text
              style={{
                ...globalStyles.textInDatesIos,
              }}
            >
              Fecha
            </Text>
          )}
          <Button
            onPress={showDatepicker}
            title={localizedFormatWithoutTime}
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
    </View>
  );
};

export default DatePicker;
