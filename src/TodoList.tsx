import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoListState } from './store';
import { TodoActionTypes } from './store/todo/types';
import { addTodo, deleteTodo } from './store/todo/actions';

const mapStateToProps = (state: TodoListState) => ({
  todoList: state.todoList
});

const mapDispatchToProps = (dispatch: Dispatch<TodoActionTypes>) => ({
  addTodo: () => dispatch(addTodo('xx')),
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  dispatch
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

class TodoList extends React.Component<Props> {
  handleAdd() {
    this.props.addTodo();
  }
  handleDelete(id: number) {
    this.props.deleteTodo(id);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.handleAdd();
          }}
        >
          增加
        </button>
        <ul>
          {this.props.todoList.map(i => {
            const { id, text, completed } = i;
            return (
              <li key={id}>
                {`id:${id}   text:${text}   completed:${completed}`}
                <button
                  onClick={() => {
                    this.handleDelete(id);
                  }}
                >
                  删除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
