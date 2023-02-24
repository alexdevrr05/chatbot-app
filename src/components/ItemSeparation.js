import React from 'react';
import { View } from 'react-native';
import { colors } from '../themes/appTheme';

const ItemSeparator = ({
  borderBottomWidth = 2,
  marginVertical = 7,
  borderColor = colors.primaryColor,
}) => {
  return (
    <View
      style={{
        borderBottomWidth,
        marginVertical,
        borderColor,
      }}
    />
  );
};

export default ItemSeparator;
