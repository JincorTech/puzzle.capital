import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import contactFormSaga from './contactFormSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(contactFormSaga)
  ]);
}
