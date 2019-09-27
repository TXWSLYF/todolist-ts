import { combineReducers, createStore } from 'redux';
import { todoReducer } from './todo/reducers';

const rootReducer = combineReducers({
  todoList: todoReducer
});

// TODO: 没看懂这步的写法 https://segmentfault.com/a/1190000015054118#articleHeader2
export type TodoListState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
