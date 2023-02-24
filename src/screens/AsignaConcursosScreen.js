import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AsignaConcursosScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20 }}>
      <Text>AsignaConcursosScreen</Text>
    </View>
  );
};

export default AsignaConcursosScreen;
