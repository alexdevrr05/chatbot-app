import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const UsuariosScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20 }}>
      <Text>UsuariosScreen</Text>
    </View>
  );
};

export default UsuariosScreen;
