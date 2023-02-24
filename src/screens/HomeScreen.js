import React from 'react';
import FlatListMenuItem from '../components/FlatListMenuItem.js';
import ListHeader from '../components/ListHeader.js';
import ItemSeparator from '../components/ItemSeparation.js';

import { View, FlatList, Text } from 'react-native';
import { styles } from '../themes/appTheme.js';
import { menuItems } from '../data/menuItem.js';

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

const HomeScreen = () => {
  return (
    <View
      style={{
        ...styles.gloablMargin,
      }}
    >
      <FlatList
        data={menuItems}
        // renderItem={({ item }) => <Item title={item.title} />}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<ListHeader title='Menú de opciones' />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

export default HomeScreen;
