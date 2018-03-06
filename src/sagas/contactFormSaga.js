import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { post } from '../utils/fetch';
import { submitContactForm, changeStep } from '../redux/modules/contactForm';


function* submitContactFormIterator({ payload }) {
  try {
    yield call(post, '/api', payload);
    yield put(changeStep('success'));
  } catch (e) {
    yield call(console.log, e);
  }
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
