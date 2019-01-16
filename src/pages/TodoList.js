import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux'

import * as TodoActions from '~/store/actions/todos'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TodoList = ({ todos, addTodo }) => {
  return (
    <View style={styles.container}>
      { todos.map(todo => <Text key={todo.id}>{todo.text}</Text>)}
      <TouchableOpacity onPress={() => { addTodo('Nova Tarefa'); }}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
