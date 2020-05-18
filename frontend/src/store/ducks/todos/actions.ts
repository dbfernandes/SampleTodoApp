import { TodosTypes, Todo } from './types';

export function loadRequest() {
  return {
    type: TodosTypes.LOAD_REQUEST,
  };
}

export function loadSuccess(data: Todo[]) {
  return {
    type: TodosTypes.LOAD_SUCCESS,
    payload: { data },
  };
}

export function loadFailure() {
  return {
    type: TodosTypes.LOAD_FAILURE,
  };
}
