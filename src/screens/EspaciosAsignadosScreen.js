import React from 'react';

import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const EspaciosAsignadosScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20 }}>
      <Text>EspaciosAsignadosScreen</Text>
    </View>
  );
};

export default EspaciosAsignadosScreen;
