export interface Todo {
  id: number; // todo 的唯一 id
  text: string; // todo 内容
  completed: boolean; // todo 是否完成
}

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: {
    id: number;
  };
}

interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: {
    id: number;
    text: string;
  };
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | EditTodoAction;
