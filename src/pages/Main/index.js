import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';
import { colors } from '~/styles';

const Main = () => (
  <View style={styles.container}>
    <View>
      <Text>Página Main</Text>
    </View>
  </View>
);

Main.navigationOptions = {
  title: 'Main',
  headerStyle: {
    backgroundColor: colors.secundary,
  },
  headerTintColor: colors.white,
};

export default Main;
