import React, { useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { useNavigation } from '@react-navigation/core';
import { useNavigation } from "@react-navigation/native";

import { colors } from '../themes/appTheme.js';

const FlatListMenuItem = ({ menuItem }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate(menuItem.component)}
    activeOpacity={0.7}
    >
      <View style={styles.container}>
        <View style={styles.containerTextAndIcon}>
          <Ionicons
            name={menuItem.icon}
            size={30}
            // color={theme.colors.primary}
            style={styles.icon}
          />
          <Text style={{ fontSize: 17 }}>{menuItem.name}</Text>
        </View>

        <View>
          <Ionicons
            name='chevron-forward-outline'
            size={30}
            color={colors.orange}
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerTextAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
  },

  textOption: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default FlatListMenuItem;
