import { all, takeLatest } from 'redux-saga/effects';

import { TodosTypes } from './todos/types';
import { load } from './todos/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(TodosTypes.LOAD_REQUEST, load)]);
}
