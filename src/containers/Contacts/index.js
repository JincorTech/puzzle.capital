import React from 'react';

import ContactForm from '../../components/ContactForm';

import s from './styles.css';

const Contacts = () => (
  <div className={s.container}>
    <div className={s.title}>Contact Us</div>
    <ContactForm/>

    <div className={s.links}>
      <div className={s.link}>
        <h4>General Inquiries</h4>
        <a href="mailto:info@puzzle.capital">info@puzzle.capital</a>
      </div>

      <div className={s.link}>
        <h4>Partnerships</h4>
        <a href="mailto:partner@puzzle.capital">partner@puzzle.capital</a>
      </div>

      <div className={s.link}>
        <h4>Investments</h4>
        <a href="mailto:invest@puzzle.capital">invest@puzzle.capital</a>
      </div>

      <div className={s.link}>
        <h4>Media/Press</h4>
        <a href="mailto:press@puzzle.capital">press@puzzle.capital</a>
      </div>
    </div>
  </div>
);

export default Contacts;
