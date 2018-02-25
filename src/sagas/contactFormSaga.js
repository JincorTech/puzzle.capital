import { all, takeEvery, call, put, fork } from 'redux-saga/effects';

import { submitContactForm, changeStep } from '../redux/modules/contactForm';


function* submitContactFormIterator({ payload }) {
  yield call(console.log, payload);
  yield put(changeStep('success'));
}

function* submitContactFormSaga() {
  yield takeEvery(
    submitContactForm.REQUEST,
    submitContactFormIterator
  );
}


export default function* () {
  yield all([
    fork(submitContactFormSaga)
  ]);
}
