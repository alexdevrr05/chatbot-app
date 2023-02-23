import React from 'react';
import { View } from 'react-native';

const ItemSeparator = ({
  borderBottomWidth = 2,
  marginVertical = 7,
  borderColor = 'red',
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
