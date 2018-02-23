import React from 'react';

import ContactForm from '../../components/ContactForm';

import s from './styles.css';

const Contacts = () => (
  <div className={s.container}>
    <div className={s.title}>Contact Us</div>
    <ContactForm/>
  </div>
);

export default Contacts;
