import React from 'react';

import s from './styles.css';

const ContactFormSuccess = ({ resetStore }) => (
  <div className={s.success}>
    <div className={s.text}>
      {/* eslint-disable */}
      Thank you for contacting Puzzle Capital. Your inquiry has been successfully submitted, we will get in touch with you shortly.
      {/* eslint-enable */}
    </div>
    <div className={s.button}>
      <button type="button" onClick={() => resetStore()}>BACK</button>
    </div>
  </div>
);

export default ContactFormSuccess;
