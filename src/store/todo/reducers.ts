import {
  Todo,
  TodoActionTypes,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO
} from './types';

const initialState: Array<Todo> = [];

export function todoReducer(
  state = initialState,
  action: TodoActionTypes
): Array<Todo> {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload];
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return state.filter(i => i.id !== id);
    }
    case EDIT_TODO: {
      const { id, text } = action.payload;
      const newState = [...state];
      newState.forEach(i => {
        if (i.id === id) {
          i.text = text;
        }
      });
      return newState;
    }
    default:
      return state;
  }
}
