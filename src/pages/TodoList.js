import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
 View, Text, StyleSheet, TouchableOpacity 
} from 'react-native';

import * as TodoActions from '~/store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTodo: {
    flexDirection: 'row',
  },
});

const TodoList = ({ todos, addTodo, delTodo }) => (
  <View style={styles.container}>
    {todos.map(todo => (
      <View key={todo.id} style={styles.containerTodo}>
        <Text>{todo.text}</Text>
        <TouchableOpacity
          onPress={() => {
            delTodo(todo.id);
          }}
        >
          <Text key={todo.id}> | Excluir</Text>
        </TouchableOpacity>
      </View>
    ))}
    <TouchableOpacity
      onPress={() => {
        addTodo('Nova Tarefa');
      }}
    >
      <Text>Add Todo</Text>
    </TouchableOpacity>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
