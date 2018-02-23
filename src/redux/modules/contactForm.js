import { from } from 'seamless-immutable';
import { createReducer, createSubmitAction, createAction } from '../../utils/actions';

export const SUBMIT_CONTACT_FORM = 'app/contactForm/SUBMIT_CONTACT_FORM';
export const CHANGE_STEP = 'app/contactForm/CHANGE_STEP';
export const RESET_STORE = 'app/contactForm/RESET_STORE';

export const submitContactForm = createSubmitAction(SUBMIT_CONTACT_FORM);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  fetching: false,
  step: 'contactForm'
});

export default createReducer({
  [submitContactForm.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [submitContactForm.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [submitContactForm.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [CHANGE_STEP]: (state, { payload }) => (
    state.merge({
      step: payload
    })
  ),

  [RESET_STORE]: (state) => state.merge(initialState)
}, initialState);
