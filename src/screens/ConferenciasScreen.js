import React from 'react';

import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ConferenciasScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20 }}>
      <Text>ConferenciasScreen</Text>
    </View>
  );
};

export default ConferenciasScreen;
