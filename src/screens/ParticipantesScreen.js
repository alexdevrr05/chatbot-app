import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

const ParticipantesScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20 }}>
      <Text>TODO ISMA</Text>
    </View>
  );
};

export default ParticipantesScreen;
