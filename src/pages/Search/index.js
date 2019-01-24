import React from 'react';

import { View, Text } from 'react-native';
import { colors } from '~/styles';

import styles from './styles';

const Search = () => (
  <View style={styles.container}>
    <Text />
  </View>
);

Search.navigationOptions = () => ({
  title: 'Pesquisa',
  headerStyle: {
    backgroundColor: colors.white,
  },
});

export default Search;
