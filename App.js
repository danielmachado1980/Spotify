/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import "./src/config/ReactotronConfig";
import "./src/config/DevToolsConfig";

import Home from "~/pages";

const bgColor = "#F5FCFF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Bem-vindo ao Spotify App!</Text>
    <Home />
  </View>
);

export default App;
