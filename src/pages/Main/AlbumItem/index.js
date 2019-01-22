import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

const AlbumItem = ({ album }) => (
  <View style={styles.container}>
    <Text>{album.title}</Text>
  </View>
);

export default AlbumItem;
