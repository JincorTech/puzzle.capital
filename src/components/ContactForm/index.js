import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { required, emailValidate } from '../../utils/validators';

import RenderInput from '../forms/RenderInput';
import RenderTextarea from '../forms/RenderTextarea';

import s from './styles.css';

const ContactForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<button className={s.button} disabled={true}>SUBMITTING...</button>)
      : (<button className={s.button} disabled={invalid}>SUBMIT INQUIRY</button>));

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.row}>
        <div className={s.input}>
          <Field
            component={RenderInput}
            name="name"
            type="text"
            label="Full name"
            required={true}
            validate={required}/>
        </div>

        <div className={s.input}>
          <Field
            component={RenderInput}
            name="email"
            type="email"
            label="Email"
            required={true}
            validate={emailValidate}/>
        </div>
      </div>

      <Field
        component={RenderTextarea}
        name="message"
        label="Message"
        required={true}
        validate={required}/>

      <div className={s.buttonWrapper}>
        {renderButton()}
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'contact',
  initialValues: {
    name: '',
    email: '',
    message: ''
  }
})(ContactForm);

export default FormComponent;
