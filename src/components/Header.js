import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({ onPressLeft }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressLeft}>
        <View style={styles.btnBorder}>
          <Ionicons name="arrow-back-outline" size={30} color='black' />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    top: 10,
    height: 40,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },

  btnBorder: {
    // backgroundColor: 'blue',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
