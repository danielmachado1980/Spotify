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

import TodoList from '~/pages/TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
