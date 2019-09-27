import { ADD_TODO, DELETE_TODO, EDIT_TODO, TodoActionTypes } from './types';

let nextTodoId = 0;

export function addTodo(text: string): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text,
      completed: false
    }
  };
}

export function deleteTodo(id: number): TodoActionTypes {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  };
}

export function editTodo(id: number, text: string): TodoActionTypes {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      text
    }
  };
}
