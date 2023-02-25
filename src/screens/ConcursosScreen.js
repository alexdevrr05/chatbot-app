import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomButtom from '../components/CustomButton';

const ColaboradoresScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20 }}>
      <Text>ColaboradoresScreen</Text>
      <CustomButtom text='Agregar colaborador'/>
    </View>
  );
};

export default ColaboradoresScreen;
