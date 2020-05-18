/**
 * Action types
 */
export enum TodosTypes {
  LOAD_REQUEST = '@todos/LOAD_REQUEST',
  LOAD_SUCCESS = '@todos/LOAD_SUCCESS',
  LOAD_FAILURE = '@todos/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

/**
 * State type
 */
export interface TodosState {
  readonly data: Todo[];
  readonly loading: boolean;
  readonly error: boolean;
}
