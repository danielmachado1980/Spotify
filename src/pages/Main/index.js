import React from 'react';

import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <View>
      <Text>Página Main</Text>
    </View>
  </View>
);

export default Main;
