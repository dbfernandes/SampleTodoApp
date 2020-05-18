import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Todo } from '../../store/ducks/todos/types';
import { AppState } from '../../store';

import * as TodosActions from '../../store/ducks/todos/actions';

interface StateProps {
  todos: Todo[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

function TodoList(props: Props) {
  const { todos } = props;

  useEffect(() => {
    const { loadRequest } = props;
    loadRequest();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.description}</li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state: AppState) => ({
  todos: state.todos.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
