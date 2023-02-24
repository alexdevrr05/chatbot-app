import React from 'react';

import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AsignaTallConfScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20 }}>
      <Text>AsignaTallConfScreen</Text>
    </View>
  );
};

export default AsignaTallConfScreen;
