export const Types = {
  ADD_SUCCESS: 'todos/ADD_SUCCESS',
  DEL_SUCCESS: 'todos/DEL_SUCCESS',
};

const initialState = [
  { id: 1, text: 'Fazer café' },
  { id: 2, text: 'Estudar Gonative' },
  { id: 3, text: 'Nova tarefa' },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      return [...state, { id: Math.random(), text: action.payload.text }];
    case Types.DEL_SUCCESS:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export const Creators = {
  addTodo: text => ({
    type: Types.ADD_SUCCESS,
    payload: {
      text,
    },
  }),

  delTodo: id => ({
    type: Types.DEL_SUCCESS,
    payload: {
      id,
    },
  }),
};
