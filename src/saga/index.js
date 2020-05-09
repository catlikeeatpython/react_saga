import { all } from 'redux-saga/effects';

import { loginSagas } from './login';
export default function* rootSagas() {


  yield all([
    ...loginSagas,
  ])
}
