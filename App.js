/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';

import './src/config/ReactotronConfig';
import './src/config/DevToolsConfig';
import store from './src/store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
