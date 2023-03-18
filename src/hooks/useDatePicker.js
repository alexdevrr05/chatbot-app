import { useState } from 'react';
import { Platform } from 'react-native';

const useDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [showModalDatePicker, setShowModalDatePicker] = useState(false);
  const [showModalDatePickerIos, setShowModalDatePickerIos] = useState(false);

  //   useEffect(() => {
  //     Platform.OS === 'ios' && setShowModalDatePickerIos(true);
  //   }, []);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowModalDatePicker(false);
    setShowModalDatePickerIos(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShowModalDatePicker(true);
      // for iOS, add a button that closes the picker
    } else if (Platform.OS === 'ios') {
      setShowModalDatePickerIos(true);
    }

    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return {
    onChangeDate,
    showDatepicker,
    showModalDatePicker,
    showModalDatePickerIos,
    mode,
    date,
  };
};

export default useDatePicker;
