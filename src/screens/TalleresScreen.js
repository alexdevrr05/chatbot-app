import React from 'react';

import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TalleresScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20 }}>
      <Text>TalleresScreen</Text>
    </View>
  );
};

export default TalleresScreen;
