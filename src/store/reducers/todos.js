const initialState = [
  { id: 1, text: 'Fazer café' },
  { id: 2, text: 'Estudar Gonative' },
  { id: 3, text: 'Nova tarefa' },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
