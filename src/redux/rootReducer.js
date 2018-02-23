import { combineReducers, routerReducer as routing } from 'redux-seamless-immutable';
import { reducer as form } from 'redux-form';

import contactForm from './modules/contactForm';

export default combineReducers({
  routing,
  form,
  contactForm
});
