import React from 'react';
import { View, Text } from 'react-native';
import { colors, styles } from '../themes/appTheme.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ListHeader = ({ title, color = colors.primaryColor }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top + 20 }}>
      <Text style={{ ...styles.title, color, marginBottom: 20 }}>{title}</Text>
    </View>
  );
};

export default ListHeader;
