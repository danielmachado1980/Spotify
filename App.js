/* eslint-disable react-native/no-color-literals */
/* eslint-disable object-curly-newline */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import './src/config/ReactotronConfig';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-console
    console.tron.log('Testando debug... Reactotron de novo!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Boilerplate RN!</Text>
      </View>
    );
  }
}
